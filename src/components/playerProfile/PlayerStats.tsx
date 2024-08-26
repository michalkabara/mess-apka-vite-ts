import { Player } from "../../types";
import { PlayerStatsSingleStat } from "./PlayerStatsSingleStat";

export const PlayerStats: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 mt-2 rounded-lg w-full">
      <PlayerStatsSingleStat title="Bramki" value={player?.goals} />
      <PlayerStatsSingleStat title="Asysty" value={player?.assists} />
      <PlayerStatsSingleStat title="Żółte kartki" value={player?.yellowCards} />
      <PlayerStatsSingleStat title="Czerwone kartki" value={player?.redCards} />
    </div>
  );
};
