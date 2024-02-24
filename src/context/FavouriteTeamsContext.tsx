import { createContext, useContext, useState } from "react";

export type FavouriteTeam = {
  name: string;
  id: string;
};

export type FavouriteTeamsContextType = {
  favouriteTeams: FavouriteTeam[];
  addFavouriteTeam: (newTeam: FavouriteTeam) => void;
  removeFavouriteTeam: (teamId: string) => void;
};

const FavouriteTeamsContext = createContext<FavouriteTeamsContextType | undefined>(undefined);

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

export const useFavouriteTeamContext = () => {
  const context = useContext(FavouriteTeamsContext);
  if (!context) {
    throw new Error("you cannot use favouriteTeamsContext without favouriteTeamsProvider");
  }
  return context;
};
