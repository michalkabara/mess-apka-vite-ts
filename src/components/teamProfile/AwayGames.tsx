import { Game } from "../../types";
import { Link } from "react-router-dom";
import { SingleGame } from "../generic/SingleGame";
import { FC } from "react";

export const AwayGames: FC<{ awayGames: Game[]; homeTeamId?: string }> = ({ awayGames, homeTeamId }) => {
  return (
    <>
      {awayGames.map(({ id, ...props }, index: number) => (
        <Link
          to={`/game/${id}`}
          key={`${id}-${index}`}
          className="flex flex-row items-center w-full content-between border-zinc-200 border dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
        >
          <SingleGame {...props} />
          <span
            className={`h-[10px] w-[12px] rounded-full ${
              props.winnerId === homeTeamId
                ? "bg-green-500"
                : props.homeGoals === props.awayGoals
                ? "bg-orange-400"
                : "bg-red-500"
            }`}
          ></span>
        </Link>
      ))}
    </>
  );
};
