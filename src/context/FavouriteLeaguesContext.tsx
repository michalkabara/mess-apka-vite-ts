import { createContext, useContext, useState } from "react";

//types
export type FavouriteLeague = {
  name: string;
  id?: string;
};

export type FavouriteLeaguesContextType = {
  favouriteLeagues: FavouriteLeague[];
  addFavouriteLeague: (newLeague: FavouriteLeague) => void;
  removeFavouriteLeague: (leagueName: string) => void;
};

//context
const FavouriteLeaguesContext = createContext<FavouriteLeaguesContextType | undefined>(undefined);

//context provider
export const FavouriteLeaguesContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favouriteLeagues, setfavouriteLeagues] = useState<FavouriteLeague[]>([]);

  const addFavouriteLeague = (newLeague: FavouriteLeague) => {
    setfavouriteLeagues([...favouriteLeagues, newLeague]);
  };

  const removeFavouriteLeague = (leagueName: string) => {
    setfavouriteLeagues(favouriteLeagues.filter((league) => league.name !== leagueName));
  };

  return (
    <FavouriteLeaguesContext.Provider value={{ favouriteLeagues, addFavouriteLeague, removeFavouriteLeague }}>
      {children}
    </FavouriteLeaguesContext.Provider>
  );
};

export const useFavouriteLeaguesContext = () => {
  const context = useContext(FavouriteLeaguesContext);
  if (!context) {
    throw new Error("you cannot use favouriteLeagueContext without favouriteLeagueProvider");
  }
  return context;
};
