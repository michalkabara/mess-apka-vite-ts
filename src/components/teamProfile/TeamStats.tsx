import { IoMdFootball, IoMdTrophy } from "react-icons/io";
import { Team } from "../../types/teamTypes";
import { TeamSingleStat } from "./TeamSingleStat";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { FaHandshakeSimple, FaThumbsDown } from "react-icons/fa6";

export const TeamStats: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 mt-2 rounded-lg w-full">
        <TeamSingleStat value={team.statistics.wins}>
          <div className="flex flex-row gap-1 items-center">
            <p>Wygrane</p> <IoMdTrophy className="dark:text-amber-400 text-amber-500" />
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.draws}>
          <div className="flex flex-row gap-1 items-center">
            <p>Remisy</p> <FaHandshakeSimple className="text-sm" />
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.losses}>
          <div className="flex flex-row gap-1 items-center">
            <p>Przegrane</p> <FaThumbsDown />
          </div>
        </TeamSingleStat>

        <TeamSingleStat value={team.statistics.totalGoals}>
          <div className="flex flex-row gap-1 items-center">
            <p>Gole</p> <IoMdFootball />
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.yellowCards}>
          <div className="flex flex-row gap-1 items-center">
            <p>Żółte kartki</p> <TbRectangleVerticalFilled className="text-yellow-400" />
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.redCards}>
          <div className="flex flex-row gap-1 items-center">
            <p>Czerwone kartki</p> <TbRectangleVerticalFilled className="text-red-600" />
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.goalsHome}>
          <div className="flex flex-row gap-1 items-center">
            <p>Gole u siebie</p> <TiHome />
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.goalsAway}>
          <div className="flex flex-row gap-1 items-center">
            <p>Gole na wyjeździe</p>
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.lostGoals}>
          <div className="flex flex-row gap-1 items-center">
            <p>Stracone gole</p> <IoMdFootball />
          </div>
        </TeamSingleStat>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-2 gap-2  rounded-lg w-full">
        <TeamSingleStat value={team.statistics.winsHome}>
          <div className="flex flex-row gap-1 items-center">
            <p>Wygrane u siebie</p>
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.lossesHome}>
          <div className="flex flex-row gap-1 items-center">
            <p>Przegrane u siebie</p>
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.winsAway}>
          <div className="flex flex-row gap-1 items-center">
            <p>Wygrane na wyjeździe</p>
          </div>
        </TeamSingleStat>
        <TeamSingleStat value={team.statistics.lossesAway}>
          <div className="flex flex-row gap-1 items-center">
            <p>Przegrane na wyjeździe</p>
          </div>
        </TeamSingleStat>
      </div>
    </>
  );
};
