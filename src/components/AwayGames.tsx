import { Game } from "../types";
import { Link } from "react-router-dom";
import { SingleGame } from "./SingleGame";
import { FC } from "react";

export const AwayGames: FC<{ awayGames: Game[] }> = ({ awayGames }) => {
  return (
    <>
      {awayGames.map(({ id, ...props }, index: number) => (
        <Link
          to={`/game/${id}`}
          key={`${id}-${index}`}
          className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-1 px-2 ease-in-out duration-500 gap-2"
        >
          <SingleGame {...props} />
        </Link>
      ))}
    </>
  );
};
