import { useContext } from "react";
import { FavouriteTeamsContext } from "../context/FavouriteTeamsContext";

export const useFavouriteTeamContext = () => {
  const context = useContext(FavouriteTeamsContext);
  if (!context) {
    throw new Error("you cannot use favouriteTeamsContext without favouriteTeamsProvider");
  }
  return context;
};
