import { Link } from "react-router-dom";
import { SingleGame } from "../ui/SingleGame";
import { Game } from "../../types/gameTypes";

export const HomeGames: React.FC<{ homeGames: Game[]; homeTeamId?: string }> = ({ homeGames, homeTeamId }) => {
  return (
    <>
      {homeGames.map((game: Game, index: number) => (
        <Link
          to={`/game/${game.id}`}
          key={`${game.id}-${index}`}
          className="flex flex-row items-center w-full content-between border-zinc-200 border dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
        >
          <SingleGame
            date={game.date}
            homeTeam={game.homeTeam}
            awayTeam={game.awayTeam}
            homeGoals={game.homeGoals}
            awayGoals={game.awayGoals}
          />
          <span
            className={`h-[10px] w-[12px] rounded-full ${
              game.winnerId === homeTeamId
                ? "bg-green-500"
                : game.homeGoals === game.awayGoals
                  ? "bg-orange-400"
                  : "bg-red-500"
            }`}
          ></span>
        </Link>
      ))}
    </>
  );
};
