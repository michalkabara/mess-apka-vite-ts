import defaultCrest from "../img/crest_default.svg";
import { Link } from "react-router-dom";
import { TeamForm } from "../components/TeamForm";
import { LeagueTableEntry } from "../types";

import { useFetchLeagueTable } from "../customHooks/useFetchLeagueTable";

export const TeamGroupPosition: React.FC<{
  filterTeamId: string;
  leagueId: string;
}> = ({ filterTeamId, leagueId }) => {
  const { isPending, error, data } = useFetchLeagueTable(leagueId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const teamPosition = data.findIndex((team: LeagueTableEntry) => team.teamId === filterTeamId) + 1;

  const teamData = data.find((team: LeagueTableEntry) => team.teamId === filterTeamId);

  return (
    <>
      <div className="league-name text-center relative flex justify-center px-3"></div>
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

        <div
          key={teamData?.teamId}
          className="flex flex-row gap-3 items-center text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-2 px-2 ease-in-out duration-500 justify-between relative"
        >
          <div className="w-4 flex justify-center">{teamPosition}.</div>
          <Link to={`/team/${teamData?.teamId}`} className="flex flex-row items-center gap-3 w-[220px]">
            {teamData?.logoUrl ? (
              <img src={teamData.logoUrl} alt={teamData.teamName} className="w-5 rounded-sm p-[1px] bg-white" />
            ) : (
              <img src={defaultCrest} alt="Herb" className="w-5 rounded-sm p-[1px] bg-white" />
            )}
            <p className="text-left">{teamData?.teamName}</p>
          </Link>
          <div className="flex flex-row justify-between w-[250px]">
            <div className="w-4 flex justify-center">{teamData?.played}</div>
            <div className="w-4 flex justify-center">{teamData?.won}</div>
            <div className="w-4 flex justify-center">{teamData?.drawn}</div>
            <div className="w-4 flex justify-center">{teamData?.lost}</div>
            <div className="w-4 flex justify-center">{teamData?.goalsFor}</div>
            <div className="w-4 flex justify-center">{teamData?.goalsAgainst}</div>
            <div className="w-4 flex justify-center">{teamData?.goalDifference}</div>
            <div className="w-4 flex justify-center font-bold">{teamData?.points}</div>
          </div>

          <TeamForm teamId={teamData?.teamId} />
        </div>
      </div>
    </>
  );
};
