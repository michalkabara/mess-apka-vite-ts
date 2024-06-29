import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { LeagueTableEntry } from "../../types";

export const useFetchLeagueTable = (leagueId: string | undefined) => {
  return useQuery<LeagueTableEntry[]>({
    queryKey: ["leagueTableData", leagueId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/League/${leagueId}/table`),
  });
};
