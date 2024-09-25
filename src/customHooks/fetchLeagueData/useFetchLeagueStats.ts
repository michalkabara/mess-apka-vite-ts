import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { LeagueStats } from "../../types/leagueTypes";

export const useFetchLeagueStats = (leagueId: string | undefined) => {
  return useQuery<LeagueStats>({
    queryKey: ["leagueStats", leagueId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/api/League/${leagueId}/stats`),
  });
};
