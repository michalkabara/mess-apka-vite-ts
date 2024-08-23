import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
// import { Player } from "../types";
import { Game } from "../types/gameTypes";

export const useFetchPlayerGames = (playerId: string | undefined) => {
  return useQuery<Game[]>({
    queryKey: ["playerGames", playerId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Player/${playerId}/last-matches`),
  });
};
