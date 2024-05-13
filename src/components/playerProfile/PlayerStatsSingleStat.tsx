import { FC } from "react";

export const PlayerStatsSingleStat: FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs">{title}</p>
      <span className="text-2xl font-medium">{value}</span>
    </div>
  );
};
