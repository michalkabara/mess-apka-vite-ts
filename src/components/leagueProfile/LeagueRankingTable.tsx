import { LeagueTableEntry } from "../../types/leagueTypes";
import { useFetchLeagueTable } from "../../customHooks/fetchLeagueData/useFetchLeagueTable";
import { LeagueHeader } from "../generic/LeagueHeader";

import { PartialGame } from "../../types/gameTypes";
import { LeagueRankingTableHeader } from "./LeagueRankingTableHeader";
import { LeagueRankingTableEntry } from "./LeagueRankingTableEntry";

export const LeagueRankingTable: React.FC<{
  leagueId: string | undefined;
  leagueName: string;
  isHeaderShown?: boolean;
  teamId?: string;
  gameData?: PartialGame;
}> = ({ leagueId, leagueName, isHeaderShown = true, teamId, gameData }) => {
  const { isPending, error, data } = useFetchLeagueTable(leagueId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <>
      <div className={`${isHeaderShown ? "flex" : "hidden"} league-name flex justify-center mb-2 w-full`}>
        <LeagueHeader leagueName={leagueName} isLinkEnabled={false} hideArrow={true} leagueId={leagueId} />
      </div>
      <div className="flex flex-col gap-1 max-sm:overflow-x-scroll">
        <LeagueRankingTableHeader />

        {data.map((team: LeagueTableEntry, index: number) => {
          if (teamId === team.teamId) {
            return (
              <div className="dark:bg-zinc-800 bg-zinc-100 rounded-md" key={team.teamId}>
                <LeagueRankingTableEntry team={team} index={index} teamId={teamId} />
              </div>
            );
          }
          return <LeagueRankingTableEntry key={team.teamId} team={team} index={index} />;
        })}
      </div>
    </>
  );
};
