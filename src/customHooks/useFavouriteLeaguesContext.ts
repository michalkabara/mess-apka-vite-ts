import { useContext } from "react";
import { FavouriteLeaguesContext } from "../context/FavouriteLeaguesContext";

export const useFavouriteLeaguesContext = () => {
  const context = useContext(FavouriteLeaguesContext);
  if (!context) {
    throw new Error("you cannot use favouriteLeagueContext without favouriteLeagueProvider");
  }
  return context;
};
