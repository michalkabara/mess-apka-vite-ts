import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Game } from "../types";

export const useFetchLeagueGames = (leagueId: string) => {
  return useQuery<Game[]>({
    queryKey: ["leagueGamesData", leagueId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/league/${leagueId}/matches`),
  });
};
