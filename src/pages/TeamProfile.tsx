import { useParams, useSearchParams } from "react-router-dom";
import { SingleGame } from "../components/generic/SingleGame";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamProfileDetails } from "../components/teamProfile/TeamProfilesDetails";
import { useFetchTeamData } from "../customHooks/fetchTeamData/useFetchTeamData";
import { useFetchTeamGames } from "../customHooks/fetchTeamData/useFetchTeamGames";
import { Game } from "../types";
import { TeamPlayers } from "../components/teamProfile/TeamPlayers";
import { SingleTab } from "../components/ui/SingleTab";
import { TeamGroupPosition } from "../components/teamProfile/TeamGroupPosition";
import { HomeGames } from "../components/teamProfile/HomeGames";
import { AwayGames } from "../components/teamProfile/AwayGames";
import { UpcomingGames } from "../components/teamProfile/UpcomingGames";
import { useFecthTeamPlayers } from "../customHooks/fetchTeamData/useFetchTeamPlayers";
import { LeagueRankingTable } from "../components/generic/LeagueRankingTable";
import { useFetchLeagueData } from "../customHooks/fetchLeagueData/useFetchLeagueData";

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

  const homeGames = gamesData.data.filter((game: Game) => game.homeTeam?.name === data.name);

  const awayGames = gamesData.data.filter((game: Game) => game.awayTeam?.name === data.name);

  const upcomingGames = gamesData.data.filter((game: Game) => game.isFinished === false);

  const teamWins = gamesData.data.filter((game: Game) => game.winnerId === teamId).length;

  const teamLoses = gamesData.data.filter((game: Game) => game.winnerId !== teamId).length;

  const teamWinsPercent = (teamWins / (teamWins + teamLoses)) * 100;

  const teamLosesPercent = (teamLoses / (teamWins + teamLoses)) * 100;

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

      <div className="">
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

        <div className={` mecze mt-5 gap-2 flex-col text-xs  ${selectedTab === 1 ? "flex" : "hidden"}`}>
          <LeagueRankingTable leagueName={leagueData.name} leagueId={data.currentLeague}></LeagueRankingTable>
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 0 ? "flex" : "hidden"}`}>
          {gamesData.data.map((mecz: Game, index: number) => {
            let gameStatus;

            if (mecz.winnerId === teamId) {
              gameStatus = "bg-green-500";
            } else if (mecz.homeGoals === mecz.awayGoals) {
              gameStatus = "bg-orange-400";
            } else {
              gameStatus = "bg-red-500";
            }

            return (
              <Link
                to={`/game/${mecz.id}`}
                key={`${mecz.id}-${index}`}
                className={` border flex flex-row border-zinc-700 items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md py-2 px-3 ease-in-out duration-500 gap-2 `}
              >
                <SingleGame
                  date={mecz.date}
                  homeTeam={mecz.homeTeam}
                  awayTeam={mecz.awayTeam}
                  homeGoals={mecz.homeGoals}
                  awayGoals={mecz.awayGoals}
                />
                <span className={`h-[10px] w-[12px] rounded-full ${gameStatus}`}></span>
              </Link>
            );
          })}
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          <HomeGames homeGames={homeGames} homeTeamId={teamId} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 3 ? "flex" : "hidden"}`}>
          <AwayGames awayGames={awayGames} homeTeamId={teamId} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 4 ? "flex" : "hidden"}`}>
          <div className="flex flex-row gap-2 items-center">
            <div className={`flex flex-col gap-2`} style={{ width: teamWinsPercent + "%" }}>
              <p>Wygrane: {teamWins}</p>
              <div className={`w-full h-2 bg-green-500 rounded-full`}></div>
            </div>

            <div className={`flex flex-col items-end gap-2`} style={{ width: teamLosesPercent + "%" }}>
              <p>Przegrane: {teamLoses}</p>
              <div className={`w-full h-2 bg-red-500 rounded-full`}></div>
            </div>
          </div>
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
