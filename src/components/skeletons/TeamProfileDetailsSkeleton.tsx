export const TeamProfileDetailsSkeleton = () => {
  return (
    <div className="league-name py-4 flex items-center flex-col gap-5">
      <div className="animate-pulse bg-zinc-700 size-[100px] rounded-lg"></div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-2">
          <div className="animate-pulse bg-zinc-700 h-4 w-16 rounded-lg"></div>
        </div>

        <div className="text-xs">
          <div className="animate-pulse bg-zinc-700 h-3 w-20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
