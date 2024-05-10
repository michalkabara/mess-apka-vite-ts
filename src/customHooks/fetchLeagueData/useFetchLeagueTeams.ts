import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../clientApi";
import { Team } from "../../types";

export const useFetchLeagueTeams = (leagueId: string) => {
  return useQuery<Team[]>({
    queryKey: ["leagueGamesTeams", leagueId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Teams/league/${leagueId}`),
  });
};
