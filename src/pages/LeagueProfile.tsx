import defaultCrest from "../img/crest_default.svg";
import { Link } from "react-router-dom";
import { TeamForm } from "../components/TeamForm";
import { Team } from "../types";
import { useFetchLeagueTeams } from "../customHooks/useFetchLeagueTeams";
import { useParams } from "react-router-dom";
import { useFetchLeagueData } from "../customHooks/useFetchLeagueData";

import { LeagueHeader } from "../components/LeagueHeader";

export const LeagueProfile: React.FC<{
  leagueId: string;
}> = ({ leagueId }) => {
  const { leagueId: routeLeagueId } = useParams();

  const checkLeagueId = routeLeagueId ?? leagueId;

  const { isPending, error, data } = useFetchLeagueTeams(checkLeagueId);

  const { isPending: leagueIsPending, error: leagueError, data: leagueData } = useFetchLeagueData(checkLeagueId);

  if (isPending || leagueIsPending) return <p>Loading...</p>;

  if (error || leagueError) return <p>An error has occurred {error?.message}</p>;

  return (
    <>
      <div className="league-name flex justify-center mb-2 w-full">
        <LeagueHeader leagueName={leagueData.name} isLinkEnabled={false} hideArrow={true} />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="header flex flex-row text-xs gap-3 py-1 px-2
      border-b-[1px] border-zinc-600 pb-2 text-center justify-between"
        >
          <div className="w-4 flex justify-center">#</div>
          <div className="w-[220px] text-left">Drużyna</div>
          <div className="flex flex-row justify-between w-[250px]">
            <div className="w-4 flex justify-center">M</div>
            <div className="rounded-full bg-green-700 text-white w-4">W</div>
            <div className="rounded-full bg-orange-500 text-white w-4">R</div>
            <div className="rounded-full bg-red-700 text-white w-4">P</div>
            <div className="w-4 flex justify-center">GF</div>
            <div className="w-4 flex justify-center">GA</div>
            <div className="w-4 flex justify-center">GD</div>
            <div className="w-4 flex justify-center">P</div>
          </div>
          <div className="w-[116px] text-left">Forma</div>
        </div>
        {data.map((team: Team, index: number) => {
          return (
            <div
              key={team.id}
              className="flex flex-row gap-3 items-center text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-2 px-2 ease-in-out duration-500 justify-between relative"
            >
              <div className="w-4 flex justify-center">{index + 1}.</div>
              <Link to={`/team/${team.id}`} className="flex flex-row items-center gap-3 w-[220px]">
                {team.logoUrl ? (
                  <img src={team.logoUrl} alt={team.name} className="w-5 rounded-sm p-[1px] bg-white" />
                ) : (
                  <img src={defaultCrest} alt="Herb" className="w-5 " />
                )}
                <p className="text-left">{team.name}</p>
              </Link>
              <div className="flex flex-row justify-between w-[250px]">
                {/* <div className="w-4 flex justify-center">{team.Played}</div>
            <div className="w-4 flex justify-center">{team.Won}</div>
            <div className="w-4 flex justify-center">{team.Drawn}</div>
            <div className="w-4 flex justify-center">{team.Lost}</div>
            <div className="w-4 flex justify-center">{team.GoalsFor}</div>
            <div className="w-4 flex justify-center">{team.GoalsAgainst}</div>
            <div className="w-4 flex justify-center">{team.GoalDifference}</div>
            <div className="w-4 flex justify-center">{team.Points}</div> */}
              </div>
              <TeamForm teamId={team.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};
