import { createContext, useState } from "react";

//types
export interface FavouriteLeague {
  name: string;
  id: string | undefined;
}

export interface FavouriteLeaguesContextType {
  favouriteLeagues: FavouriteLeague[];
  addFavouriteLeague: (newLeague: FavouriteLeague) => void;
  removeFavouriteLeague: (leagueName: string) => void;
}

//context
export const FavouriteLeaguesContext = createContext<FavouriteLeaguesContextType | undefined>(undefined);

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
