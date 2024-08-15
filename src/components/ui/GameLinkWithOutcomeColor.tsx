import { Link } from "react-router-dom";
import { SingleGame } from "./SingleGame";
import { Game } from "../../types/gameTypes";

export const GameLinkWithOutcomeColor: React.FC<{ game: Game; winnerId?: string; index: number }> = ({
  game,
  winnerId,
  index,
}) => {
  let gameOutcome;

  if (game.winnerId === winnerId) gameOutcome = "dark:bg-green-600 bg-green-500";
  else if (game.homeGoals === game.awayGoals && game.homeGoals !== null)
    gameOutcome = "dark:bg-orange-500 bg-orange-300";
  else if (game.homeGoals === null && game.awayGoals === null) {
    gameOutcome = "dark:bg-transparent bg-transparent";
  } else gameOutcome = "dark:bg-red-800 bg-red-500";

  return (
    <Link
      to={`/game/${game.id}`}
      key={`${game.id}-${index}`}
      className={`flex flex-row items-center w-full content-between border-zinc-200 border dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md py-3 px-3 pr-4 ease-in-out duration-500 gap-2 bg-gradient-to-l to-[1%] relative overflow-clip`}
    >
      <SingleGame
        date={game.date}
        homeTeam={game.homeTeam}
        awayTeam={game.awayTeam}
        homeGoals={game.homeGoals}
        awayGoals={game.awayGoals}
      />

      <div className={`${gameOutcome} absolute right-0 h-full w-1`}></div>
    </Link>
  );
};
