import { useQuery, keepPreviousData } from "@tanstack/react-query";
import createClient from "openapi-fetch";
import type { paths } from "../../types/schema";

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });

export const useFetchLeagueGames = (leagueId: string, page = 0) => {
  return useQuery({
    queryKey: ["leagueGamesData", leagueId, page],
    queryFn: () =>
      client.GET("/Match/league/{leagueId}/matches", {
        params: {
          path: { leagueId: leagueId },
          query: { page: page },
        },
      }),
    placeholderData: keepPreviousData,
  });
};
