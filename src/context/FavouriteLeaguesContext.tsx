import { createContext, useState, useEffect } from "react";

//types
export interface FavouriteLeague {
  name: string;
  id: string | undefined;
}

export interface FavouriteLeaguesContextType {
  favouriteLeagues: FavouriteLeague[];
  setfavouriteLeagues: (newState: FavouriteLeague[]) => void;
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

  useEffect(() => {
    if (localStorage.getItem("favouriteTeams")) {
      setfavouriteLeagues(JSON.parse(localStorage.getItem("favouriteLeagues")));
    }
  }, [setfavouriteLeagues]);

  const addFavouriteLeague = (newLeague: FavouriteLeague) => {
    setfavouriteLeagues([...favouriteLeagues, newLeague]);
    localStorage.setItem("favouriteLeagues", JSON.stringify([...favouriteLeagues, newLeague]));
  };

  const removeFavouriteLeague = (leagueName: string) => {
    setfavouriteLeagues(favouriteLeagues.filter((league) => league.name !== leagueName));
    localStorage.setItem(
      "favouriteLeagues",
      JSON.stringify(favouriteLeagues.filter((league) => league.name !== leagueName))
    );
  };

  return (
    <FavouriteLeaguesContext.Provider
      value={{ favouriteLeagues, setfavouriteLeagues, addFavouriteLeague, removeFavouriteLeague }}
    >
      {children}
    </FavouriteLeaguesContext.Provider>
  );
};
