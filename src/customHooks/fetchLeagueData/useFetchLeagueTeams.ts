import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Team } from "../../types";

export const useFetchLeagueTeams = (leagueId: string) => {
  return useQuery<Team[]>({
    queryKey: ["leagueGamesTeams", leagueId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Teams/league/${leagueId}`),
  });
};
