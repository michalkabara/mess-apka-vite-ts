import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../clientApi";
import { Game } from "../../types";

export const useFetchLeagueRoundGames = (leagueId: string | undefined, round: number) => {
  return useQuery<Game[]>({
    queryKey: ["leagueRoundGames", leagueId, round],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Match/${leagueId}/matches/${round}`),
  });
};
``;
