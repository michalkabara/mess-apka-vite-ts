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
export const FavouriteLeaguesContext = createContext<FavouriteLeaguesContextType>({
  favouriteLeagues: [],
  setfavouriteLeagues: () => {},
  addFavouriteLeague: () => {},
  removeFavouriteLeague: () => {},
});

//context provider
export const FavouriteLeaguesContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favouriteLeagues, setfavouriteLeagues] = useState<FavouriteLeague[]>([]);

  useEffect(() => {
    const favLeagues: string | null = localStorage.getItem("favouriteLeagues");

    if (!favLeagues) return;

    const parsedFavLeagues = JSON.parse(favLeagues) as FavouriteLeague[];

    if (localStorage.getItem("favouriteTeams")) {
      setfavouriteLeagues(parsedFavLeagues);
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
