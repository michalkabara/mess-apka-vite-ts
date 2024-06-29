import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";

export const useFetchLeagueRoundCount = (leagueId: string | undefined) => {
  return useQuery<number>({
    queryKey: ["leagueRoundCount", leagueId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Match/league/${leagueId}/round-count`),
  });
};
``;
