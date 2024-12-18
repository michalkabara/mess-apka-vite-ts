import { Link } from "react-router-dom";
import { TeamForm } from "../teamProfile/TeamForm";
import defaultCrest from "../../img/default_player.png";
import { LeagueTableEntry } from "../../types/leagueTypes";

export const LeagueRankingTableEntry: React.FC<{ team: LeagueTableEntry; index: number; teamId?: string }> = ({
  team,
  index,
  teamId,
}) => {
  return (
    <div
      key={team.teamId}
      className="group flex flex-row gap-3 items-center text-xs hover:bg-zinc-200 max-sm:w-fit dark:hover:bg-zinc-800 rounded-md py-2 px-2 ease-in-out duration-500 justify-between"
    >
      <Link
        to={`/team/${team.teamId}`}
        className={`w-[160px]
      sm:w-[215px] flex flex-row items-center gap-3 sticky left-0 dark:group-hover:bg-zinc-800 ease-in-out duration-500 group-hover:bg-zinc-200 max-sm:-translate-x-5 max-sm:pl-5 z-10 dark:bg-[#202022] pr-5 ${team.teamId === teamId ? "bg-zinc-100 dark:bg-zinc-800" : "bg-white"}`}
      >
        <div className="w-4 flex justify-center">{index + 1}.</div>
        {team.logoUrl ? (
          <img src={team.logoUrl} alt={team.teamName} className="w-5 rounded-sm p-[1px] bg-white" />
        ) : (
          <img src={defaultCrest} alt="Herb" className="w-5" />
        )}
        <p className="text-left truncate w-[120px]">{team.teamName}</p>
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
};
