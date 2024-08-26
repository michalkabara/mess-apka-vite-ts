export const TeamSingleStat: React.FC<{ stat: [string, number]; label: string | undefined }> = ({ stat, label }) => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 px-3 py-2 rounded-md flex flex-col gap-1">
      <p className="text-xs">{label}</p>
      <p className="text-xl font-semibold">{stat[1]}</p>
    </div>
  );
};
