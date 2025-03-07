import { LeagueTableEntry } from "../../types/leagueTypes";
import { useFetchLeagueTable } from "../../customHooks/fetchLeagueData/useFetchLeagueTable";
import { LeagueRankingTableHeader } from "../leagueProfile/LeagueRankingTableHeader";
import { LeagueRankingTableEntry } from "../leagueProfile/LeagueRankingTableEntry";

export const TeamGroupPosition: React.FC<{
  filterTeamId: string;
  leagueId: string;
}> = ({ filterTeamId, leagueId }) => {
  const { isPending, error, data } = useFetchLeagueTable(leagueId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const teamPosition = data.findIndex((team: LeagueTableEntry) => team.teamId === filterTeamId);

  const teamData = data.find((team: LeagueTableEntry) => team.teamId === filterTeamId);

  return (
    <>
      <LeagueRankingTableHeader />
      {teamData && <LeagueRankingTableEntry team={teamData} index={teamPosition} />}
    </>
  );
};
