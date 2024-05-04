import { Link, useSearchParams } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useFetchLeagueData } from "../customHooks/useFetchLeagueData";
import { LeagueHeader } from "../components/LeagueHeader";
import { useFetchLeagueGames } from "../customHooks/useFetchLeagueGames";
import { SingleGame } from "../components/SingleGame";
import { useEffect, useState } from "react";
import { SingleTab } from "../components/ui/SingleTab";
import { LeagueRankingTable } from "../components/LeagueRankingTable";
import { Pagination } from "@mui/material";

export const LeagueProfile: React.FC<{ leagueId?: string | undefined }> = ({ leagueId }) => {
  const [selectedTab, setSelecteTab] = useState<number | null>(0);
  const { leagueId: routeLeagueId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [, setUpcomingGamesCurrentPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  // const [upcomingGamesNumberOfPages, setUpcomingGamesNumberOfPages] = useState<number>(0);

  const checkLeagueId = routeLeagueId ?? leagueId;

  const {
    isPending: gamesArePending,
    error: gamesError,
    data: gamesData,
  } = useFetchLeagueGames(checkLeagueId, currentPage);

  const { isPending: leagueIsPending, error: leagueError, data: leagueData } = useFetchLeagueData(checkLeagueId);

  useEffect(() => {
    const currentTab = searchParams.get("page");
    if (!currentTab || !gamesData?.pageCount) return;
    setSelecteTab(parseInt(currentTab));
    setNumberOfPages(gamesData.pageCount);
  }, [searchParams, gamesData?.pageCount]);

  if (leagueIsPending || gamesArePending) return <p>Loading...</p>;

  if (leagueError ?? gamesError) return <p>An error has occurred {gamesError?.message}</p>;

  const tabs: { name: string }[] = [{ name: "Tabela" }, { name: "Wyniki" }, { name: "Nadchodzące mecze" }];

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value - 1);
    setUpcomingGamesCurrentPage(value - 1);
  };

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  // const upcomingGames = gamesData.data.filter((game) => game.isFinished === false);
  // const upcomingGamesPages = Math.ceil(upcomingGames.length / 10) + 1;

  return (
    <>
      <div className="league-name flex justify-center mb-2 w-full">
        <LeagueHeader leagueName={leagueData.name} isLinkEnabled={false} hideArrow={true} leagueId={checkLeagueId} />
      </div>
      <div className="w-full">
        <div className="flex flex-row gap-3 mt-5 flex-wrap w-full mb-5 justify-center">
          {tabs.map((button, index) => (
            <SingleTab
              key={`tab-${index}`}
              button={button}
              index={index}
              selectTabAndChangeUrl={selectTabAndChangeUrl}
              selectedTab={selectedTab}
            />
          ))}
        </div>

        <div
          className={`tabela mt-2 gap-1 flex flex-col text-xs max-sm:overflow-x-scroll ${
            selectedTab === 0 ? "flex" : "hidden"
          }`}
        >
          <LeagueRankingTable
            leagueName={leagueData.name}
            leagueId={checkLeagueId}
            isHeaderShown={false}
          ></LeagueRankingTable>
        </div>

        <div className={` wyniki mt-2 gap-1 flex flex-col text-xs w-full ${selectedTab === 1 ? "flex" : "hidden"}`}>
          {gamesData.data.map((game) => (
            <div key={game.id} className="flex flex-col items-center w-full">
              <Link
                to={`/game/${game.id}`}
                className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-[5px] px-4 ease-in-out duration-500 gap-5"
              >
                <SingleGame
                  date={game.date}
                  homeTeam={game.homeTeam}
                  awayTeam={game.awayTeam}
                  homeGoals={game.homeGoals}
                  awayGoals={game.awayGoals}
                />
              </Link>
            </div>
          ))}
          <div className="flex justify-center text-gray-50 bg-zinc-800 rounded-md mt-3 p-1 bottom-0 w-full">
            <Pagination
              count={numberOfPages}
              size="small"
              onChange={handleChange}
              page={currentPage + 1}
              sx={{
                button: { color: "#ffffff" },
                ".Mui-selected": { backgroundColor: "rgb(255 255 255 / 16%)!important" },
                div: { color: "white" },
              }}
              className="text-white"
            />
          </div>
        </div>

        {/* <div className={` wyniki mt-2 gap-1 flex flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          {upcomingGamesData.data.map((game) => (
            <div key={game.id} className="flex flex-col items-center">
              <Link
                to={`/game/${game.id}`}
                className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-[5px] px-4 ease-in-out duration-500 gap-2"
              >
                <SingleGame
                  date={game.date}
                  homeTeam={game.homeTeam}
                  awayTeam={game.awayTeam}
                  homeGoals={game.homeGoals}
                  awayGoals={game.awayGoals}
                />
              </Link>
            </div>
          ))}
          <div className="flex justify-center text-gray-50 bg-zinc-800 rounded-md mt-3 p-1  bottom-0 w-full">
            <Pagination
              count={upcomingGamesNumberOfPages}
              size="small"
              onChange={handleChange}
              page={upcomingGamesCurrentPage + 1}
              sx={{
                button: { color: "#ffffff" },
                ".Mui-selected": { backgroundColor: "rgb(255 255 255 / 16%)!important" },
                div: { color: "white" },
              }}
              className="text-white"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};
