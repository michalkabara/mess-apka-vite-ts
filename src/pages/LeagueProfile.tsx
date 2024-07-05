import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchLeagueData } from "../customHooks/fetchLeagueData/useFetchLeagueData";
import { LeagueHeader } from "../components/generic/LeagueHeader";
import { useEffect, useState } from "react";
import { SingleTab } from "../components/generic/SingleTab";
import { LeagueRankingTable } from "../components/ui/LeagueRankingTable";
import { Pagination } from "@mui/material";
import { useFetchLeagueRoundCount } from "../customHooks/fetchLeagueData/useFetchLeagueRoundCount";
import { useFetchLeagueRoundGames } from "../customHooks/fetchLeagueData/useFetchLeagueRoundGames";
import { GameLink } from "../components/ui/GameLink";
import { Game } from "../types/gameTypes";

export const LeagueProfile: React.FC<{ leagueId?: string }> = ({ leagueId }) => {
  const [selectedTab, setSelecteTab] = useState<number | null>(0);
  const { leagueId: routeLeagueId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, setUpcomingGamesCurrentPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>(0);

  const checkLeagueId = routeLeagueId ?? leagueId;

  const {
    isPending: gamesArePending,
    error: gamesError,
    data: gamesData,
  } = useFetchLeagueRoundGames(checkLeagueId, currentPage);

  const { isPending: leagueIsPending, error: leagueError, data: leagueData } = useFetchLeagueData(checkLeagueId);

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

  if (leagueIsPending || gamesArePending || leagueRoundCountIsPending) return <p>Loading...</p>;

  if (leagueError ?? gamesError ?? leagueRoundCountError)
    return <p>An error has occurred {leagueRoundCountError?.message}</p>;

  const tabs: { name: string }[] = [{ name: "Tabela" }, { name: "Wyniki" }, { name: "Nadchodzące mecze" }];

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <>
      <div className=" flex justify-center mb-2 ">
        <LeagueHeader leagueName={leagueData.name} isLinkEnabled={false} hideArrow={true} leagueId={checkLeagueId} />
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
          ></LeagueRankingTable>
        </div>

        <div className={` wyniki mt-2 gap-1 flex flex-col text-xs  ${selectedTab === 1 ? "flex" : "hidden"}`}>
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
          {gamesData.map((game, index) => (
            <div key={game.id} className="flex flex-col items-center ">
              <GameLink game={game} index={index} />
            </div>
          ))}
        </div>

        <div className={` wyniki mt-2 gap-1 flex flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
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
        </div>
      </div>
    </>
  );
};
