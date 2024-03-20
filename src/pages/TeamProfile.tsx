import { useParams, useSearchParams } from "react-router-dom";
import { SingleGame } from "../components/SingleGame";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamProfileDetails } from "../components/TeamProfilesDetails";
import { useFetchTeamData } from "../customHooks/useFetchTeamData";
import { useFetchTeamGames } from "../customHooks/useFetchTeamGames";
import { Game } from "../types";
import { TeamPlayers } from "../components/TeamPlayers";
import { SingleTab } from "../components/ui/SingleTab";
import { TeamGroupPosition } from "../components/TeamGroupPosition";
import { HomeGames } from "../components/HomeGames";
import { AwayGames } from "../components/AwayGames";
import { UpcomingGames } from "../components/UpcomingGames";
import { useFecthTeamPlayers } from "../customHooks/useFetchTeamPlayers";
import { LeagueRankingTable } from "../components/LeagueRankingTable";
import { useFetchLeagueData } from "../customHooks/useFetchLeagueData";

const tabs: { name: string }[] = [
  { name: "Wyniki" },
  { name: "Tabela" },
  { name: "Domowe" },
  { name: "Wyjazdowe" },
  { name: "Statystyki" },
  { name: "Kadra" },
  { name: "Nadchodzące mecze" },
];

export const TeamProfile: React.FC = () => {
  const { teamId } = useParams();
  const [selectedTab, setSelecteTab] = useState<number | null>(0);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams.get("page");
    if (!currentPage) return;
    setSelecteTab(parseInt(currentPage));
  }, [searchParams]);

  const { isPending, error, data } = useFetchTeamData(teamId);

  const {
    isPending: isLeagueDataPending,
    error: leagueDataError,
    data: leagueData,
  } = useFetchLeagueData(data?.currentLeague);

  const { isPending: areGamesPending, error: gamesError, data: gamesData } = useFetchTeamGames(teamId);
  const { isPending: arePlayersPending, error: playersError, data: playersData } = useFecthTeamPlayers(teamId);

  if (isPending || areGamesPending || arePlayersPending || isLeagueDataPending) return <p>Loading...</p>;

  if (error ?? gamesError ?? playersError ?? leagueDataError) return <p>An error has occurred {error?.message}</p>;

  const homeGames = gamesData.filter((game: Game) => game.homeTeam?.name === data.name);

  const awayGames = gamesData.filter((game: Game) => game.awayTeam?.name === data.name);

  const upcomingGames = gamesData.filter((game: Game) => game.isFinished === false);

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <>
      <TeamProfileDetails
        teamLogo={data.logoUrl}
        teamName={data.name}
        teamId={data.id}
        currentLeagueId={data.currentLeague}
        currentLeagueName={leagueData.name}
      />

      <div className="mt-5">
        <TeamGroupPosition filterTeamId={data.id} leagueId={data.currentLeague} />
      </div>

      <div className="tabs">
        <div className="flex flex-row gap-3 mt-5 flex-wrap w-full">
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

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 1 ? "flex" : "hidden"}`}>
          <LeagueRankingTable leagueName={leagueData.name} leagueId={data.currentLeague}></LeagueRankingTable>
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 0 ? "flex" : "hidden"}`}>
          {gamesData.reverse().map((mecz: Game, index: number) => (
            <Link
              to={`/game/${mecz.id}`}
              key={`${mecz.id}-${index}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-1 px-2 ease-in-out duration-500 gap-2"
            >
              <SingleGame
                date={mecz.date}
                homeTeam={mecz.homeTeam}
                awayTeam={mecz.awayTeam}
                homeGoals={mecz.homeGoals}
                awayGoals={mecz.awayGoals}
              />
            </Link>
          ))}
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          <HomeGames homeGames={homeGames} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 3 ? "flex" : "hidden"}`}>
          <AwayGames awayGames={awayGames} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 5 ? "flex" : "hidden"}`}>
          <TeamPlayers team={playersData} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 6 ? "flex" : "hidden"}`}>
          <UpcomingGames upcomingGames={upcomingGames} />
        </div>
      </div>
    </>
  );
};
