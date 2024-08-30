import { IoMdFootball } from "react-icons/io";
import { Player } from "../../types";
import { PlayerStatsSingleStat } from "./PlayerStatsSingleStat";
import { TbRectangleVerticalFilled, TbPlayFootball } from "react-icons/tb";

export const PlayerStats: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <div className="grid  grid-cols-2 gap-2 mt-2 rounded-lg w-full">
      <PlayerStatsSingleStat value={player?.goals}>
        <div className="flex flex-row gap-1 items-center">
          <p>Bramki</p> <IoMdFootball />
        </div>
      </PlayerStatsSingleStat>
      <PlayerStatsSingleStat value={player?.assists}>
        <div className="flex flex-row gap-1 items-center">
          <p>Asysty</p> <TbPlayFootball className="text-sm" />
        </div>
      </PlayerStatsSingleStat>
      <PlayerStatsSingleStat value={player?.yellowCards}>
        <div className="flex flex-row gap-1 items-center">
          <p>Żółte kartki</p> <TbRectangleVerticalFilled className="text-yellow-400" />
        </div>
      </PlayerStatsSingleStat>
      <PlayerStatsSingleStat value={player?.redCards}>
        <div className="flex flex-row gap-1 items-center">
          <p>Czerwone kartki</p> <TbRectangleVerticalFilled className="text-red-600" />
        </div>
      </PlayerStatsSingleStat>
    </div>
  );
};
