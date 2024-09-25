import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Game } from "../../types/gameTypes";

export const useFetchLeagueRoundGames = (leagueId: string | undefined, round: number) => {
  return useQuery<Game[]>({
    queryKey: ["leagueRoundGames", leagueId, round],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/api/Match/${leagueId}/matches/${round}`),
  });
};
``;
