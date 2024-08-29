import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamProfileDetails } from "../components/teamProfile/TeamProfilesDetails";
import { useFetchTeamData } from "../customHooks/fetchTeamData/useFetchTeamData";
import { useFetchTeamGames } from "../customHooks/fetchTeamData/useFetchTeamGames";
import { Game } from "../types/gameTypes";
import { TeamPlayers } from "../components/teamProfile/TeamPlayers";
import { SingleTab } from "../components/generic/SingleTab";
import { TeamGroupPosition } from "../components/teamProfile/TeamGroupPosition";
import { HomeGames } from "../components/teamProfile/HomeGames";
import { AwayGames } from "../components/teamProfile/AwayGames";
import { UpcomingGames } from "../components/teamProfile/UpcomingGames";
import { useFecthTeamPlayers } from "../customHooks/fetchTeamData/useFetchTeamPlayers";
import { LeagueRankingTable } from "../components/leagueProfile/LeagueRankingTable";
import { useFetchLeagueData } from "../customHooks/fetchLeagueData/useFetchLeagueData";
import { GameLinkWithOutcomeColor } from "../components/ui/GameLinkWithOutcomeColor";
import { TeamStats } from "../components/teamProfile/TeamStats";
import { useFetchSeasons } from "../customHooks/useFetchSeasons";
import PageTitle from "../components/generic/PageTitle";

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
  const [selectedTab, setSelecteTab] = useState<number>(0);

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
  const { isPending: seasonsPending, error: seasonsError, data: seasonsData } = useFetchSeasons();

  if (isPending || areGamesPending || arePlayersPending || isLeagueDataPending || seasonsPending)
    return <p>Loading...</p>;

  if (error ?? gamesError ?? playersError ?? leagueDataError ?? seasonsError)
    return <p>An error has occurred {error?.message}</p>;

  const homeGames = gamesData.data.filter((game: Game) => game.homeTeam?.name === data.name);
  const awayGames = gamesData.data.filter((game: Game) => game.awayTeam?.name === data.name);
  const upcomingGames = gamesData.data.filter((game: Game) => game.isFinished === false);

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <>
      <PageTitle title={`HotScore - ${data.name}`} />

      <TeamProfileDetails
        teamLogo={data.logoUrl}
        teamName={data.name}
        teamId={data.id}
        currentLeagueId={data.currentLeague}
        currentLeagueName={leagueData.name}
      />

      {/* <div className="flex justify-center">
        <div className="flex flex-row gap-2 text-xs items-center ">
          <label htmlFor="sezon" className="font-semibold">
            Sezon
          </label>
          <select name="sezon" id="" className="w-max p-1 rounded-md bg-zinc-200 dark:bg-zinc-800">
            {seasonsData.map((season: string) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>
      </div> */}

      <div className="mt-5">
        <TeamGroupPosition filterTeamId={data.id} leagueId={data.currentLeague} />
      </div>

      <div className="">
        <div className="flex flex-row gap-3 mt-5 flex-wrap w-full justify-center">
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

        <div className={` mecze mt-5 gap-2 flex-col text-xs  ${selectedTab === 1 ? "flex" : "hidden"}`}>
          <LeagueRankingTable
            teamId={teamId}
            leagueName={leagueData.name}
            leagueId={data.currentLeague}
          ></LeagueRankingTable>
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 0 ? "flex" : "hidden"}`}>
          {gamesData.data
            .filter((game) => game.isFinished === true)
            .map((game: Game, index: number) => (
              <GameLinkWithOutcomeColor game={game} index={index} winnerId={teamId} key={game.id} />
            ))}
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          <HomeGames homeGames={homeGames} homeTeamId={teamId} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 3 ? "flex" : "hidden"}`}>
          <AwayGames awayGames={awayGames} homeTeamId={teamId} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 4 ? "flex" : "hidden"}`}>
          <TeamStats team={data} />
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
