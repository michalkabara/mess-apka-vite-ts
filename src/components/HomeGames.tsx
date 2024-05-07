import { Link } from "react-router-dom";
import { SingleGame } from "./SingleGame";
import { Game } from "../types";
import { FC } from "react";

export const HomeGames: FC<{ homeGames: Game[] }> = ({ homeGames }) => {
  return (
    <>
      {homeGames.map((game: Game, index: number) => (
        <Link
          to={`/game/${game.id}`}
          key={`${game.id}-${index}`}
          className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-1 px-2 ease-in-out duration-500 gap-2"
        >
          <SingleGame
            date={game.date}
            homeTeam={game.homeTeam}
            awayTeam={game.awayTeam}
            homeGoals={game.homeGoals}
            awayGoals={game.awayGoals}
          />
        </Link>
      ))}
    </>
  );
};
