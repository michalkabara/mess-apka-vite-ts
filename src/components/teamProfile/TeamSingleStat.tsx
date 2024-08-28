import { ReactNode } from "react";

export const TeamSingleStat: React.FC<{ children: ReactNode; value: number }> = ({ children, value }) => {
  return (
    <div className="dark:bg-zinc-800 bg-zinc-200 px-3 py-2 rounded-md flex flex-col gap-1">
      <p className="text-xs">{children}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};
