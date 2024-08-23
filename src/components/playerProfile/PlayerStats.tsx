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

export const PlayerStats: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 mt-2 rounded-lg w-full">
      {labels.map((label) => (
        <PlayerStatsSingleStat label={label} key={label.title} />
      ))}
    </div>
  );
};
