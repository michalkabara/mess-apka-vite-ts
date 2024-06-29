import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { League } from "../../types";

export const useFetchLeagueData = (leagueId: string | undefined) => {
  return useQuery<League>({
    queryKey: ["leagueData", leagueId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/League/${leagueId}`),
  });
};
