import { createContext, useState } from "react";

export interface FavouriteTeam {
  name: string;
  id: string;
}

export interface FavouriteTeamsContextType {
  favouriteTeams: FavouriteTeam[];
  addFavouriteTeam: (newTeam: FavouriteTeam) => void;
  removeFavouriteTeam: (teamId: string) => void;
}

export const FavouriteTeamsContext = createContext<FavouriteTeamsContextType | undefined>(undefined);

export const FavouriteTeamContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favouriteTeams, setfavouriteTeams] = useState<FavouriteTeam[]>([]);

  const addFavouriteTeam = (newTeam: FavouriteTeam) => {
    setfavouriteTeams([...favouriteTeams, newTeam]);
  };

  const removeFavouriteTeam = (teamId: string) => {
    setfavouriteTeams(favouriteTeams.filter((team) => team.id !== teamId));
  };

  return (
    <FavouriteTeamsContext.Provider value={{ favouriteTeams, addFavouriteTeam, removeFavouriteTeam }}>
      {children}
    </FavouriteTeamsContext.Provider>
  );
};
