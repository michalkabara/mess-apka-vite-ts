import { Link, useSearchParams } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useFetchLeagueData } from "../customHooks/useFetchLeagueData";
import { LeagueHeader } from "../components/LeagueHeader";
import { useFetchLeagueGames } from "../customHooks/useFetchLeagueGames";
import { SingleGame } from "../components/SingleGame";
import { useEffect, useState } from "react";
import { SingleTab } from "../components/ui/SingleTab";
import { LeagueRankingTable } from "../components/LeagueRankingTable";

export const LeagueProfile: React.FC<{ leagueId?: string | undefined }> = ({ leagueId }) => {
  const [selectedTab, setSelecteTab] = useState<number | null>(0);
  const { leagueId: routeLeagueId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get("page");
    if (!currentPage) return;
    setSelecteTab(parseInt(currentPage));
  }, [searchParams]);

  const checkLeagueId = routeLeagueId ?? leagueId;

  const { isPending: gamesArePending, error: gamesError, data: gamesData } = useFetchLeagueGames(checkLeagueId);

  const { isPending: leagueIsPending, error: leagueError, data: leagueData } = useFetchLeagueData(checkLeagueId);

  if (leagueIsPending || gamesArePending) return <p>Loading...</p>;

  if (leagueError ?? gamesError) return <p>An error has occurred {gamesError?.message}</p>;

  const tabs: { name: string }[] = [{ name: "Tabela" }, { name: "Wyniki" }, { name: "Nadchodzące mecze" }];

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <>
      <div className="league-name flex justify-center mb-2 w-full">
        <LeagueHeader leagueName={leagueData.name} isLinkEnabled={false} hideArrow={true} leagueId={checkLeagueId} />
      </div>
      <div className="tabs">
        <div className="flex flex-row gap-3 mt-5 flex-wrap w-full mb-5">
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

        <div className={`mecze mt-2 gap-1 flex flex-col text-xs ${selectedTab === 0 ? "flex" : "hidden"}`}>
          <LeagueRankingTable
            leagueName={leagueData.name}
            leagueId={checkLeagueId}
            isHeaderShown={false}
          ></LeagueRankingTable>
        </div>

        <div className={`mecze mt-2 gap-1 flex flex-col text-xs ${selectedTab === 1 ? "flex" : "hidden"}`}>
          {gamesData.data.map((game) => (
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
        </div>
      </div>
    </>
  );
};
