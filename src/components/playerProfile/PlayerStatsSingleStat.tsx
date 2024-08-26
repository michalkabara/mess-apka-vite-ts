export const PlayerStatsSingleStat: React.FC<{ title: string; value: number }> = ({ title, value }) => {
  return (
    <div className="bg-zinc-800 px-3 py-2 rounded-md flex flex-col gap-1">
      <p className="text-xs">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};
