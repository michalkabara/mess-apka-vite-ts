import { Team } from "../../types/teamTypes";
import { TeamSingleStat } from "./TeamSingleStat";

const labels = [
  "Wygrane",
  "Przegrane",
  "Remisy",
  "Wygrane u siebie",
  "Przegrane u siebie",
  "Wygrane na wyjeździe",
  "Przegrane na wyjeździe",
  "Gole",
  "Gole u siebie",
  "Gole na wyjeździe",
  "Stracone gole",
  "Żółte kartki",
  "Czerwone kartki",
];

export const TeamStats: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 mt-2 rounded-lg w-full">
      {Object.entries(team.statistics).map((stat, index) => (
        <TeamSingleStat stat={stat} label={labels[index]} key={stat[0]} />
      ))}
    </div>
  );
};
