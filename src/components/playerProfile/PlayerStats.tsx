import { FC } from "react";
import { PlayerStatsSingleStat } from "./PlayerStatsSingleStat";

const labels = [
  { title: "Występy", value: "3" },
  { title: "Gole", value: "2" },
  { title: "Wygrane", value: "1" },
  { title: "Zremisowane", value: "0" },
  { title: "Porażki", value: "1" },
  { title: "Minuty na boisku", value: "999" },
  { title: "Czerwone kartki", value: "1" },
  { title: "Żółte kartki", value: "1" },
];

export const PlayerStats: FC = () => {
  return (
    <div className="flex flex-row gap-5 justify-between mt-2 bg-zinc-800 px-4 py-3 rounded-lg">
      {labels.map((label) => (
        <PlayerStatsSingleStat title={label.title} value={label.value} />
      ))}
    </div>
  );
};
