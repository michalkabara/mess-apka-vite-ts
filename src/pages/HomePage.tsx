import { useContext, useEffect } from "react";
import { VoivodeChildLeagues } from "../components/ui/VoivodeChildLeagues";
import PageTitle from "../components/generic/PageTitle";
import { HomePageVoivodeButtons } from "../components/ui/HomePageVoivodeButtons";
import { HomePageFavouriteLeagues } from "./HomePageFavouriteLeagues";
import { DefaultVoivodeContex } from "../context/DefaultVoivodeContext";

export const HomePage: React.FC = () => {
  const { defualtVoivodeId, setDefaultVoivodeId, handleSelectDefaultVoivode } = useContext(DefaultVoivodeContex);

  useEffect(() => {
    const defaultVoivode: string | null = localStorage.getItem("defaultVoivode");
    if (!defaultVoivode) return;
    const parsedDefaultVoivode = JSON.parse(defaultVoivode);
    setDefaultVoivodeId(parsedDefaultVoivode);
  }, [setDefaultVoivodeId]);

  return (
    <>
      <PageTitle title="HotScore" />
      {defualtVoivodeId ? (
        <VoivodeChildLeagues defualtVoivodeId={defualtVoivodeId} />
      ) : (
        <HomePageVoivodeButtons handleSelectDefaultVoivode={handleSelectDefaultVoivode} />
      )}
    </>
  );
};
