import { useContext, useEffect, useState } from "react";
import { VoivodeChildLeagues } from "../components/ui/VoivodeChildLeagues";
import PageTitle from "../components/generic/PageTitle";
import { HomePageVoivodeButtons } from "../components/ui/HomePageVoivodeButtons";
import { HomePageFavouriteLeagues } from "./HomePageFavouriteLeagues";
import { DefaultVoivodeContex } from "../context/DefaultVoivodeContext";
import { useSearchParams } from "react-router-dom";
import { SingleTab } from "../components/generic/SingleTab";
import { useFavouriteLeaguesContext } from "../customHooks/useFavouriteLeaguesContext";

export const HomePage: React.FC = () => {
  const { defualtVoivode, setDefaultVoivode, handleSelectDefaultVoivode } = useContext(DefaultVoivodeContex);
  const { favouriteLeagues } = useFavouriteLeaguesContext();
  const [selectedTab, setSelecteTab] = useState<number>(0);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get("page");
    if (!currentPage) return;
    setSelecteTab(parseInt(currentPage));
  }, [searchParams]);

  useEffect(() => {
    const defaultVoivode: string | null = localStorage.getItem("defaultVoivode");
    if (!defaultVoivode) return;
    const parsedDefaultVoivode = JSON.parse(defaultVoivode);
    setDefaultVoivode({ id: parsedDefaultVoivode.id, name: parsedDefaultVoivode.name });
  }, [setDefaultVoivode]);

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <>
      <PageTitle title="HotScore" />
      <div className="flex flex-row gap-3 flex-wrap w-full justify-center">
        {favouriteLeagues.length > 0 && (
          <SingleTab
            key={`tab-${0}`}
            buttonText="Moje Ligi"
            index={0}
            onClick={() => selectTabAndChangeUrl(0)}
            selectedTab={selectedTab}
          />
        )}
        {defualtVoivode && (
          <SingleTab
            key={`tab-${1}`}
            buttonText={defualtVoivode.name}
            index={1}
            onClick={() => selectTabAndChangeUrl(1)}
            selectedTab={selectedTab}
          />
        )}
      </div>

      {defualtVoivode.id ? (
        <>
          <div className={`flex flex-col mt-5 ${selectedTab === 0 ? "flex" : "hidden"}`}>
            <HomePageFavouriteLeagues />
          </div>

          <div className={`flex flex-col mt-5 ${selectedTab === 1 ? "flex" : "hidden"}`}>
            <VoivodeChildLeagues defualtVoivodeId={defualtVoivode.id} />
          </div>
        </>
      ) : (
        <HomePageVoivodeButtons handleSelectDefaultVoivode={handleSelectDefaultVoivode} />
      )}
    </>
  );
};
