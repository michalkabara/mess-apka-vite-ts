import { FC } from "react";
import { GameDetailsEntry } from "../ui/GameDetailsEntry";

export const GameDetailsEntries: FC = () => {
  return (
    <>
      <div className="text-xs uppercase bg-zinc-300 dark:bg-zinc-700 opacity rounded-md p-2 mb-3 mt-5">
        <p>1 Połowa</p>
      </div>
      <div className="flex flex-col w-full justify-between text-sm px-2">
        <div className="flex flex-col items-start gap-1">
          <GameDetailsEntry type="yellow" time="69" order="left" />
        </div>
        <div className="flex flex-col items-end gap-1 ">
          <GameDetailsEntry type="yellow" time="69" order="right" />
          <GameDetailsEntry type="red" time="69" order="right" />
          <GameDetailsEntry type="swap" time="69" order="right" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <GameDetailsEntry type="yellow" time="69" order="left" />
          <GameDetailsEntry type="swap" time="69" order="right" />
          <GameDetailsEntry type="goal" time="69" order="right" />
        </div>
      </div>
      <div className="text-xs uppercase bg-zinc-300 dark:bg-zinc-700 opacity rounded-md p-2 my-3">
        <p>2 Połowa</p>
      </div>
    </>
  );
};
