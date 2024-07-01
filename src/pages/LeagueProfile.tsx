import { Link, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchLeagueData } from "../customHooks/fetchLeagueData/useFetchLeagueData";
import { LeagueHeader } from "../components/generic/LeagueHeader";
import { SingleGame } from "../components/ui/SingleGame";
import { useEffect, useState } from "react";
import { SingleTab } from "../components/generic/SingleTab";
import { LeagueRankingTable } from "../components/ui/LeagueRankingTable";
import { Pagination } from "@mui/material";
import { useFetchLeagueRoundCount } from "../customHooks/fetchLeagueData/useFetchLeagueRoundCount";
import { useFetchLeagueRoundGames } from "../customHooks/fetchLeagueData/useFetchLeagueRoundGames";

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
    setSelecteTab(parseInt(currentTab));
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
          {gamesData.map((game) => (
            <div key={game.id} className="flex flex-col items-center ">
              <Link
                to={`/game/${game.id}`}
                className="flex flex-row border dark:border-zinc-700 items-center w-full content-between hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
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
        </div>

        {/* <div className={` wyniki mt-2 gap-1 flex flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          {upcomingGamesData.data.map((game: PartialGame) => (
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
