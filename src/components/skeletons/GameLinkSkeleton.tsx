export const GameLinkSkeleton = () => {
  return (
    <div
      className={`animate-pulse text-xs flex flex-row items-center w-full content-between border-zinc-200 border dark:border-zinc-700 rounded-md py-3 px-3 gap-5 relative overflow-clip`}
    >
      <div className="w-20 bg-zinc-50 opacity-5 h-4 rounded-full"></div>
      <div className="text-left w-full" id="teams-container">
        <div className="flex flex-row gap-2 content-start items-center" id="team1-container">
          <div className="size-5 bg-zinc-50 opacity-5 rounded-md"></div>
          <div className="w-32  bg-zinc-50 opacity-5 h-4 rounded-full"></div>
        </div>
        <div className="mt-2 flex flex-row gap-2 items-center" id="team2-container">
          <div className="size-5 bg-zinc-50 opacity-5 rounded-md"></div>
          <div className="w-32  bg-zinc-50 opacity-5 h-4 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-4 items-end ">
        <div className="w-7  bg-zinc-50 opacity-5 h-4 rounded-full"></div>
        <div className="w-7  bg-zinc-50 opacity-5 h-4 rounded-full"></div>
      </div>
    </div>
  );
};
