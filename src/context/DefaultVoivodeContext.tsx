import { createContext, useState } from "react";

export interface DefaultVoivodeContexType {
  defualtVoivodeId: string;
  handleSelectDefaultVoivode: (id: string) => void;
  setDefaultVoivodeId: (id: string) => void;
}

export const DefaultVoivodeContex = createContext<DefaultVoivodeContexType>({
  defualtVoivodeId: "",
  handleSelectDefaultVoivode: () => {},
  setDefaultVoivodeId: () => {},
});

export const DefaultVoivodeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [defualtVoivodeId, setDefaultVoivodeId] = useState("");

  const handleSelectDefaultVoivode = (id: string) => {
    localStorage.setItem("defaultVoivode", JSON.stringify(id));
    setDefaultVoivodeId(id);
  };

  return (
    <DefaultVoivodeContex.Provider value={{ defualtVoivodeId, handleSelectDefaultVoivode, setDefaultVoivodeId }}>
      {children}
    </DefaultVoivodeContex.Provider>
  );
};
