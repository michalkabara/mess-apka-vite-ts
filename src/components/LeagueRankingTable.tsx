import { Link } from "react-router-dom";
import { LeagueTableEntry } from "../types";
import { TeamForm } from "./TeamForm";
import defaultCrest from "../img/default_player.png";
import { useFetchLeagueTable } from "../customHooks/useFetchLeagueTable";
import { LeagueHeader } from "./LeagueHeader";

export const LeagueRankingTable: React.FC<{
  leagueId: string | undefined;
  leagueName: string;
  isHeaderShown?: boolean;
}> = ({ leagueId, leagueName, isHeaderShown = true }) => {
  const { isPending, error, data } = useFetchLeagueTable(leagueId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <>
      <div className={`${isHeaderShown ? "flex" : "hidden"} league-name flex justify-center mb-2 w-full`}>
        <LeagueHeader leagueName={leagueName} isLinkEnabled={false} hideArrow={true} leagueId={leagueId} />
      </div>
      <div
        className="header flex flex-row text-xs gap-3 py-1 px-2 max-sm:w-fit
      border-b-[1px] border-zinc-600 pb-2 text-center justify-between"
      >
        <div
          className="max-sm:w-[170px]
          w-[220px] flex flex-row left-0 sticky gap-2 dark:bg-zinc-900 bg-zinc-200"
        >
          <div className="w-4 flex justify-center">#</div>
          <div className="text-left ">Drużyna</div>
        </div>

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
        <div className="w-[116px] text-left ">Forma</div>
      </div>
      {data.map((team: LeagueTableEntry, index: number) => {
        return (
          <div
            key={team.teamId}
            className="group flex flex-row gap-3 items-center text-xs hover:bg-zinc-300 max-sm:w-fit dark:hover:bg-zinc-700 rounded-md py-2 px-2 ease-in-out duration-500 justify-between"
          >
            <Link
              to={`/team/${team.teamId}`}
              className="max-sm:w-[170px] flex flex-row items-center gap-3 w-[220px] sticky left-0 dark:bg-zinc-900 dark:group-hover:bg-zinc-700 ease-in-out duration-500 bg-zinc-200 group-hover:bg-zinc-300"
            >
              <div className="w-4 flex justify-center ">{index + 1}.</div>
              {team.logoUrl ? (
                <img src={team.logoUrl} alt={team.teamName} className="w-5 rounded-sm p-[1px] bg-white" />
              ) : (
                <img src={defaultCrest} alt="Herb" className="w-5 " />
              )}
              <p className="text-left">{team.teamName}</p>
            </Link>
            <div className="flex flex-row justify-between w-[250px]">
              <div className="w-4 flex justify-center">{team.played}</div>
              <div className="w-4 flex justify-center">{team.won}</div>
              <div className="w-4 flex justify-center">{team.drawn}</div>
              <div className="w-4 flex justify-center">{team.lost}</div>
              <div className="w-4 flex justify-center">{team.goalsFor}</div>
              <div className="w-4 flex justify-center">{team.goalsAgainst}</div>
              <div className="w-4 flex justify-center">{team.goalDifference}</div>
              <div className="w-4 flex justify-center font-bold ">{team.points}</div>
            </div>
            <div className="">
              <TeamForm teamId={team.teamId} />
            </div>
          </div>
        );
      })}
    </>
  );
};
