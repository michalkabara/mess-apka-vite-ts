import { createContext, useState } from "react";

export interface DefaultVoivodeContexType {
  defualtVoivode: { id: string; name: string };
  handleSelectDefaultVoivode: (id: string, name: string) => void;
  setDefaultVoivode: ({ id: string, name: string }) => void;
}

export const DefaultVoivodeContex = createContext<DefaultVoivodeContexType>({
  defualtVoivode: { id: "", name: "" },
  handleSelectDefaultVoivode: () => {},
  setDefaultVoivode: () => {},
});

export const DefaultVoivodeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [defualtVoivode, setDefaultVoivode] = useState({ id: "", name: "" });

  const handleSelectDefaultVoivode = (id: string, name: string) => {
    localStorage.setItem("defaultVoivode", JSON.stringify({ id, name }));
    setDefaultVoivode({ id, name });
  };

  return (
    <DefaultVoivodeContex.Provider value={{ defualtVoivode, handleSelectDefaultVoivode, setDefaultVoivode }}>
      {children}
    </DefaultVoivodeContex.Provider>
  );
};
