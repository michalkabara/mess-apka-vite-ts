import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useSearchParams } from "react-router-dom";

export interface SelectedTabContextType {
  selectedTab: number | null;
  setSelecteTab: Dispatch<SetStateAction<number | null>>;
  selectTab: (selectedIndex: number) => void;
  selectTabAndChangeUrl: (index: number) => void;
  searchParams: URLSearchParams;
  setSearchParams: () => void;
}

export const SelectedTabContext = createContext<SelectedTabContextType | undefined>(undefined);

export const SelectedTabContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedTab, setSelecteTab] = useState<number | null>(0);
  const [searchParams, setSearchParams] = useSearchParams();

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
