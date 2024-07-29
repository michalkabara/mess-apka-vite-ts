import { createContext, useState, useEffect } from "react";

export interface FavouriteTeam {
  name?: string;
  id?: string;
}

export interface FavouriteTeamsContextType {
  favouriteTeams: FavouriteTeam[];
  setfavouriteTeams: (newState: FavouriteTeam[]) => void;
  addFavouriteTeam: (newTeam: FavouriteTeam) => void;
  removeFavouriteTeam: (teamId: string) => void;
}

export const FavouriteTeamsContext = createContext<FavouriteTeamsContextType>({
  favouriteTeams: [],
  setfavouriteTeams: () => {},
  addFavouriteTeam: () => {},
  removeFavouriteTeam: () => {},
});

export const FavouriteTeamContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favouriteTeams, setfavouriteTeams] = useState<FavouriteTeam[]>([]);

  useEffect(() => {
    if (localStorage.getItem("favouriteTeams")) {
      setfavouriteTeams(JSON.parse(localStorage.getItem("favouriteTeams")));
    }
  }, [setfavouriteTeams]);

  const addFavouriteTeam = (newTeam: FavouriteTeam) => {
    setfavouriteTeams([...favouriteTeams, newTeam]);
    localStorage.setItem("favouriteTeams", JSON.stringify([...favouriteTeams, newTeam]));
  };

  const removeFavouriteTeam = (teamId: string) => {
    setfavouriteTeams(favouriteTeams.filter((team) => team.id !== teamId));
    localStorage.setItem("favouriteTeams", JSON.stringify(favouriteTeams.filter((team) => team.id !== teamId)));
  };

  return (
    <FavouriteTeamsContext.Provider
      value={{ favouriteTeams, setfavouriteTeams, addFavouriteTeam, removeFavouriteTeam }}
    >
      {children}
    </FavouriteTeamsContext.Provider>
  );
};
