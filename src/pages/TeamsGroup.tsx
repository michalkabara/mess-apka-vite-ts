import defaultCrest from "../img/crest_default.svg";
import { Link } from "react-router-dom";
import { TeamForm } from "../components/TeamForm";
import { Team } from "../types";
import { useFetchTeamGames } from "../customHooks/useFetchTeamGames";
import { useFetchLeagueTeams } from "../customHooks/useFetchLeagueTeams";

export const TeamsGroup: React.FC<{
  isHeaderVisible?: boolean;
  filterTeamId?: string;
  leagueId: string;
}> = ({ isHeaderVisible = true, filterTeamId = "", leagueId }) => {
  const { isPending, error, data } = useFetchLeagueTeams(leagueId);
  console.log({ leagueId });

  const { isPending: areGamesPending, error: gamesError, data: gamesData } = useFetchTeamGames(filterTeamId);

  if (isPending || areGamesPending) return <p>Loading...</p>;

  if (error || gamesError) return <p>An error has occurred {error?.message}</p>;

  const teamPosition = data.findIndex((team: Team) => team.id === filterTeamId) + 1;

  return (
    <>
      <div className="league-name text-center relative flex justify-center px-3">
        <span className={`text-md font-bold uppercase ${isHeaderVisible ? "visible" : "hidden"} mb-5`}>
          Liga Okręgowa Tarnów
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="header flex flex-row text-xs gap-3 py-1 px-2
      border-b-[1px] border-zinc-600 pb-2 text-center justify-between"
        >
          <div className="w-4 flex justify-center">#</div>
          <div className="w-[220px] text-left">Drużyna</div>
          <div className="w-4 flex justify-center">M</div>
          <div className="rounded-full bg-green-700 text-white w-4">W</div>
          <div className="rounded-full bg-orange-500 text-white w-4">R</div>
          <div className="rounded-full bg-red-700 text-white w-4">P</div>
          <div className="w-4 flex justify-center">GF</div>
          <div className="w-4 flex justify-center">GA</div>
          <div className="w-4 flex justify-center">GD</div>
          <div className="w-4 flex justify-center">P</div>
          <div className="w-[116px] text-left">Forma</div>
        </div>
        {data.map((team: Team, index: number) => {
          console.log(`${team.id} team-id`);

          return (
            <div
              key={team.id}
              className="flex flex-row gap-3 items-center text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-2 px-2 ease-in-out duration-500 justify-between relative"
            >
              <div className="w-4 flex justify-center">{filterTeamId ? teamPosition : index + 1}.</div>
              <Link to={`/team/${team.id}`} className="flex flex-row items-center gap-3 w-[220px]">
                {team.logoUrl ? (
                  <img src={team.logoUrl} alt={team.name} className="w-5" />
                ) : (
                  <img src={defaultCrest} alt="Herb" className="w-5" />
                )}
                <p className="text-left">{team.name}</p>
              </Link>
              {/* <div className="w-4 flex justify-center">{team.Played}</div>
            <div className="w-4 flex justify-center">{team.Won}</div>
            <div className="w-4 flex justify-center">{team.Drawn}</div>
            <div className="w-4 flex justify-center">{team.Lost}</div>
            <div className="w-4 flex justify-center">{team.GoalsFor}</div>
            <div className="w-4 flex justify-center">{team.GoalsAgainst}</div>
            <div className="w-4 flex justify-center">{team.GoalDifference}</div>
            <div className="w-4 flex justify-center">{team.Points}</div> */}
              <TeamForm teamId={team.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};
