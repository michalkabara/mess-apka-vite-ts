import { useQuery, keepPreviousData } from "@tanstack/react-query";
import createClient from "openapi-fetch";
import type { paths } from "../../types/schema";

const client = createClient<paths>({ baseUrl: "https://api-beta.trybuna.tv/" });

export const useFetchLeagueGames = (leagueId: string, page = 0) => {
  return useQuery({
    queryKey: ["leagueGamesData", leagueId, page],
    queryFn: () =>
      client.GET("/api/Match/league/{leagueId}/matches", {
        params: {
          path: { leagueId: leagueId },
          query: { page: page },
        },
      }),
    placeholderData: keepPreviousData,
  });
};
