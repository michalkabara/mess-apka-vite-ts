export const LeagueSingleStat: React.FC<{ label: { title: string; value: number | string | undefined } }> = ({
  label,
}) => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 px-3 py-2 rounded-md flex flex-col gap-1">
      <p className="text-xs">{label.title}</p>
      <p className="text-xl font-semibold">{label.value}</p>
    </div>
  );
};
