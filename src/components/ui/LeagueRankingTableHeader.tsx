import { FC } from "react";

export const LeagueRankingTableHeader: FC = () => {
  return (
    <div className="header flex flex-row text-xs gap-3 py-1 px-2 max-sm:w-fit border-b-[1px] border-zinc-600 pb-2 text-center justify-between ">
      <div
        className="w-[170px]
    sm:w-[220px] flex flex-row left-0 sticky gap-2 dark:bg-zinc-900 bg-zinc-200 z-2 max-sm:-translate-x-5 max-sm:pl-5 "
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
  );
};
