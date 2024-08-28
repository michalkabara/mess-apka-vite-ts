import { useFetchLeagueStats } from "../../customHooks/fetchLeagueData/useFetchLeagueStats";
import { LeagueStatPlayer } from "../../types/leagueTypes";
import { LeaguePlayerStat } from "./LeaguePlayerStat";
import { LeagueSingleStat } from "./LeagueSingleStat";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { IoMdFootball } from "react-icons/io";

export const LeagueStats: React.FC<{ leagueId: string | undefined }> = ({ leagueId }) => {
  const { data, isPending, isError } = useFetchLeagueStats(leagueId);

  return (
    <>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 mt-2 w-full">
        <LeagueSingleStat label={{ title: "Wygrane u siebie", value: data?.homeWins }} />
        <LeagueSingleStat label={{ title: "Remisy", value: data?.draws }} />
        <LeagueSingleStat label={{ title: "Wygrane na wyjeździe", value: data?.awayWins }} />
        <LeagueSingleStat label={{ title: "Gole u siebie", value: data?.homeGoals }} />
        <LeagueSingleStat label={{ title: "Gole na wyjeździe", value: data?.awayGoals }} />
      </div>

      <div>
        <h2 className="text-xs uppercase py-2 mt-2 mb-2 border-b-[1px] border-zinc-600 flex items-center gap-2">
          Top strzelcy <IoMdFootball />
        </h2>
        <div className="flex flex-col gap-2">
          {data?.topScorers.map((player: LeagueStatPlayer, index) => (
            <LeaguePlayerStat key={`${player.id}-goals`} player={player} index={index} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xs uppercase py-2 mt-2 mb-2 border-b-[1px] border-zinc-600 flex items-center gap-2">
          Top czerwone kartki <TbRectangleVerticalFilled className="text-red-600" />
        </h2>
        <div className="flex flex-col gap-2">
          {data?.topRedCards.map((player: LeagueStatPlayer, index) => (
            <LeaguePlayerStat key={`${player.id}-red`} player={player} index={index} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xs uppercase py-2 mt-2 mb-2 border-b-[1px] border-zinc-600 flex items-center gap-2">
          Top żółte kartki <TbRectangleVerticalFilled className="text-yellow-400" />
        </h2>
        <div className="flex flex-col gap-2">
          {data?.topYellowCards.map((player: LeagueStatPlayer, index) => (
            <LeaguePlayerStat key={`${player.id}-yellow`} player={player} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};
