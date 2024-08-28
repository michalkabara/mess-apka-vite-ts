import { Link } from "react-router-dom";
import { SingleGame } from "./SingleGame";
import { Game } from "../../types/gameTypes";

export const GameLink: React.FC<{ game: Game; winnerId?: string; index: number }> = ({ game, index }) => {
  return (
    <Link
      to={`/game/${game.id}`}
      key={`${game.id}-${index}`}
      className={`flex flex-row items-center w-full content-between border-zinc-200 border dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md py-3 px-3  ease-in-out duration-500 gap-2 relative overflow-clip`}
    >
      <SingleGame
        date={game.date}
        homeTeam={game.homeTeam}
        awayTeam={game.awayTeam}
        homeGoals={game.homeGoals}
        awayGoals={game.awayGoals}
      />
    </Link>
  );
};
