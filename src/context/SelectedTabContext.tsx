import { createContext, useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useSearchParams } from "react-router-dom";

export type SelectedTabContextType = {
  selectedTab: number | null;
  setSelecteTab: Dispatch<SetStateAction<number | null>>;
  selectTab: (selectedIndex: number) => void;
  selectTabAndChangeUrl: (index: number) => void;
  searchParams: URLSearchParams;
  setSearchParams: () => void;
};

const SelectedTabContext = createContext<SelectedTabContextType | undefined>(undefined);

export const SelectedTabContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedTab, setSelecteTab] = useState<number | null>(0);
  let [searchParams, setSearchParams] = useSearchParams();

  const selectTab = (selectedIndex: number) => {
    setSelecteTab(selectedIndex);
  };

  const selectTabAndChangeUrl = (index: number) => {
    selectTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <SelectedTabContext.Provider
      value={{ selectedTab, selectTab, setSelecteTab, searchParams, setSearchParams, selectTabAndChangeUrl }}
    >
      {children}
    </SelectedTabContext.Provider>
  );
};

export const useSelectedTabContext = () => {
  const context = useContext(SelectedTabContext);
  if (!context) {
    throw new Error("you cannot use SelectedTabContext without Provider");
  }
  return context;
};
