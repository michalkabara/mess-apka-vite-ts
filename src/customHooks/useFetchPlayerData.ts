import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { Player } from "../types";

export const useFetchPlayerData = (playerId: string | undefined) => {
  return useQuery<Player>({
    queryKey: ["playerData", playerId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Player/${playerId}`),
  });
};
