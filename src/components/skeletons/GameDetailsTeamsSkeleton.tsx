export const GameDetailsTeamsSkeleton = () => {
  return (
    <div className="grid grid-cols-5 gap-1 md:gap-5 mt-7 items-start justify-items-center relative">
      <div className="translate-y-3 sm:translate-y-10 sm:translate-x-12"></div>

      <div className="flex flex-col text-center text-xs gap-3 items-center ">
        <div className="md:size-20 lg:size-24 size-12 rounded-md p-1 animate-pulse bg-zinc-700"></div>
        <div className="w-14 h-3 animate-pulse bg-zinc-700 rounded-xl"></div>
      </div>

      <span className="text-center font-semibold text-nowrap sm:text-2xl md:text-4xl m-auto sm:-translate-y-3 -translate-y-5">
        <p>-</p>
      </span>

      <div className="flex flex-col text-center text-xs gap-3 items-center ">
        <div className="md:size-20 lg:size-24 size-12 rounded-md p-1 animate-pulse bg-zinc-700"></div>
        <div className="w-14 h-3 animate-pulse bg-zinc-700 rounded-xl"></div>
      </div>
      <div className="translate-y-3 sm:translate-y-10 sm:-translate-x-12">
        <div></div>
      </div>
    </div>
  );
};
