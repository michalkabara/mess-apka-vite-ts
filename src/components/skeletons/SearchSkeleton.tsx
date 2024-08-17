export const SearchSkeleton = () => {
  return (
    <div
      className={`animate-pulse flex flex-row items-center w-full content-between rounded-md py-3 px-3 gap-5 relative overflow-clip`}
    >
      <div className="w-full bg-zinc-50 opacity-5 h-4 rounded-xl"></div>
    </div>
  );
};
