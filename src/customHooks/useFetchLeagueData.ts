import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { League } from "../types";

export const useFetchLeagueData = (leagueId: string) => {
  return useQuery<League>({
    queryKey: ["leagueData", leagueId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/League/${leagueId}`),
  });
};
