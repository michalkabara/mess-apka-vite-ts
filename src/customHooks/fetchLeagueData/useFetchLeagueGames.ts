import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchData } from "../../../clientApi";
import { Game, PagedResponse } from "../../types";

export const useFetchLeagueGames = (leagueId: string | undefined, page = 0) => {
  return useQuery<PagedResponse<Game>>({
    queryKey: ["leagueGamesData", leagueId, page],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/league/${leagueId}/matches?page=${page}`),
    placeholderData: keepPreviousData,
  });
};
