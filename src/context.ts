import { createContext, useContext, useState } from "react";

const;

export const FavouriteTeamsContext = createContext<
  { name: string; id: string }[] | undefined
>(undefined);

export const FavouriteTeamContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favouriteTeams, setfavouriteTeams] = useState<
    { name: string; id: string }[]
  >([]);

  const addFavouriteTeam = (newTeam: { name: string; id: string }) => {
    setfavouriteTeams([...favouriteTeams, newTeam]);
  };

  const removeFavouriteTeam = (teamId: string) => {
    setfavouriteTeams(favouriteTeams.filter((team) => team.id !== teamId));
  };

  return (
    <FavouriteTeamsContext.Provider
      value={{ favouriteTeams, addFavouriteTeam, removeFavouriteTeam }}
    >
      {children}
    </FavouriteTeamsContext.Provider>
  );
};
