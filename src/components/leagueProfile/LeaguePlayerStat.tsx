import defaultPlayer from "../../img/default_player.png";
import { Link } from "react-router-dom";
import { LeagueStatPlayer } from "../../types/leagueTypes";

export const LeaguePlayerStat: React.FC<{ player: LeagueStatPlayer; index: number }> = ({ player, index }) => {
  return (
    <div key={player.id} className={"rounded-lg bg-zinc-100 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-800 order-3"}>
      <div className={`flex flex-row items-center gap-4 py-2 px-3 rounded-lg`}>
        <p className="w-4">{index + 1}.</p>
        <div>
          <img className="w-6" src={defaultPlayer} alt="default player" />
        </div>

        <Link to={`/player/${player.id}`} className="w-32">
          {player.name}
        </Link>
        <div className="flex justify-center w-6">{player.value}</div>
        <Link
          to={`/team/${player.teamId}`}
          className="hidden justify-center items-center gap-3 sm:flex md:flex lg:flex "
        >
          <img src={player.teamLogoUrl} alt={player.teamName} className="size-6 bg-white rounded-md p-1" />
          {player.teamName}
        </Link>
      </div>
    </div>
  );
};
