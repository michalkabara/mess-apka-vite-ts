import { useContext } from "react";
import { SelectedTabContext } from "../context/SelectedTabContext";

export const useSelectedTabContext = () => {
  const context = useContext(SelectedTabContext);
  if (!context) {
    throw new Error("you cannot use SelectedTabContext without Provider");
  }
  return context;
};
