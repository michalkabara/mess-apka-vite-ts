import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchLeagueData } from "../customHooks/fetchLeagueData/useFetchLeagueData";
import { LeagueHeader } from "../components/generic/LeagueHeader";
import { useEffect, useState } from "react";
import { SingleTab } from "../components/generic/SingleTab";
import { LeagueRankingTable } from "../components/leagueProfile/LeagueRankingTable";
import { Pagination } from "../components/generic/Pagination";
import { useFetchLeagueRoundCount } from "../customHooks/fetchLeagueData/useFetchLeagueRoundCount";
import { useFetchLeagueRoundGames } from "../customHooks/fetchLeagueData/useFetchLeagueRoundGames";
import { GameLink } from "../components/ui/GameLink";
import { GameLinkSkeleton } from "../components/skeletons/GameLinkSkeleton";
import defaultCrest from "../img/crest_default.svg";
import { PartialGame } from "../types/gameTypes";
import { LeagueStats } from "../components/leagueProfile/LeagueStats";
import { useFetchSeasons } from "../customHooks/useFetchSeasons";
import PageTitle from "../components/generic/PageTitle";

export const LeagueProfile: React.FC<{
  leagueId?: string;
  isLogoVisible?: boolean;
  gameData?: PartialGame;
  changePageTitle?: boolean;
}> = ({ leagueId, isLogoVisible = true, gameData, changePageTitle = true }) => {
  const [selectedTab, setSelecteTab] = useState<number | null>(0);
  const { leagueId: routeLeagueId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setUpcomingGamesCurrentPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>(0);

  const checkLeagueId = routeLeagueId ?? leagueId;

  const {
    error: gamesError,
    data: gamesData,
    status: gameDataStatus,
  } = useFetchLeagueRoundGames(checkLeagueId, currentPage);

  const { isPending: leagueIsPending, error: leagueError, data: leagueData } = useFetchLeagueData(checkLeagueId);
  const { isPending: seasonsPending, error: seasonsError, data: seasonsData } = useFetchSeasons();

  const {
    isPending: leagueRoundCountIsPending,
    error: leagueRoundCountError,
    data: leagueRoundCountData,
  } = useFetchLeagueRoundCount(checkLeagueId);

  useEffect(() => {
    const currentTab = searchParams.get("page");
    if (currentTab) {
      setSelecteTab(parseInt(currentTab));
    }
    setNumberOfPages(leagueRoundCountData);
  }, [leagueRoundCountData]);

  if (leagueIsPending || leagueRoundCountIsPending || seasonsPending) return <p>Loading...</p>;

  if (leagueError ?? gamesError ?? leagueRoundCountError ?? seasonsError)
    return <p>An error has occurred {leagueRoundCountError?.message}</p>;

  const tabs: { name: string }[] = [
    { name: "Tabela" },
    { name: "Wyniki" },
    { name: "Statystyki" },
    { name: "Nadchodzące mecze" },
  ];

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <>
      {changePageTitle ? <PageTitle title={`HotScore - ${leagueData.name}`} /> : ""}

      <div className=" flex justify-center mb-2 flex-col items-center gap-4 py-4">
        {isLogoVisible ? <img src={defaultCrest} alt="Herb" className="w-20 rounded-md p-1 bg-white" /> : ""}
        <LeagueHeader leagueName={leagueData.name} isLinkEnabled={false} hideArrow={true} leagueId={checkLeagueId} />
        {/* <div className="flex flex-row gap-2 text-xs items-center">
          <label htmlFor="sezon" className="font-semibold">
            Sezon
          </label>
          <select name="sezon" id="" className="w-max p-1 rounded-md bg-zinc-100 dark:bg-zinc-900">
            {seasonsData.map((season: string) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div> */}
      </div>

      <div className="">
        <div className="flex flex-row gap-3 my-3 flex-wrap  justify-center">
          {tabs.map((button, index) => (
            <SingleTab
              key={`tab-${index}`}
              buttonText={button.name}
              index={index}
              onClick={() => selectTabAndChangeUrl(index)}
              selectedTab={selectedTab}
            />
          ))}
        </div>

        <div className={`mt-2 gap-1 flex flex-col text-xs  ${selectedTab === 0 ? "flex" : "hidden"}`}>
          <LeagueRankingTable
            leagueName={leagueData.name}
            leagueId={checkLeagueId}
            isHeaderShown={false}
            gameData={gameData}
          ></LeagueRankingTable>
        </div>

        <div className={` wyniki mt-2 gap-1 flex flex-col text-xs  ${selectedTab === 1 ? "flex" : "hidden"}`}>
          <div className="mt-2 sm:flex-row flex flex-col gap-1 dark:text-gray-50 dark:bg-zinc-800 bg-zinc-50 rounded-md p-1 bottom-0 w-full duration-500 ease-in-out justify-center items-center px-3 relative">
            <p className="text-xs sm:absolute left-3">KOLEJKA</p>
            <Pagination numberOfPages={numberOfPages} handleChange={handleChange} currentPage={currentPage} />
          </div>
          {gameDataStatus !== "success" && (
            <div
              className={`mecze mt-2 flex flex-col gap-1 text-xs relative transition-all duration-500 ease-in-out overflow-hidden`}
            >
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
            </div>
          )}
          {gamesData?.map((game, index) => (
            <div key={game.id} className="flex flex-col items-center ">
              <GameLink game={game} index={index} />
            </div>
          ))}
        </div>

        <div className={`mt-2 gap-1 flex flex-col text-xs  ${selectedTab === 2 ? "flex" : "hidden"}`}>
          <LeagueStats leagueId={checkLeagueId} />
        </div>

        {/* <div className={` wyniki mt-2 gap-1 flex flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          <div className="mt-2 sm:flex-row flex flex-col gap-1 dark:text-gray-50 dark:bg-zinc-800 rounded-md p-1 bottom-0 w-full duration-500 ease-in-out justify-center items-center px-3 relative">
            <p className="text-xs sm:absolute left-3">KOLEJKA</p>
            <Pagination
              count={numberOfPages}
              size="small"
              onChange={handleChange}
              page={currentPage}
              sx={{
                button: {
                  color: "#ffffff",
                  fontSize: "12px",
                  height: "24px",
                  width: "24px",
                  minWidth: "22px",
                  paddingTop: "3px",
                },
                ".Mui-selected": { backgroundColor: "rgb(255 255 255 / 12%)!important" },
                div: { color: "white" },
              }}
              className="dark:text-white text-zinc-700"
            />
          </div>
          {gamesData
            .filter((game) => game.isFinished === false)
            .map((game: Game, index) => (
              <div key={game.id} className="flex flex-col items-center">
                <GameLink game={game} index={index} />
              </div>
            ))}
        </div> */}
      </div>
    </>
  );
};
