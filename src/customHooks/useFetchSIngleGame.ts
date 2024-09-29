import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { Game } from "../types/gameTypes";

export const useFetchSingleGame = (matchId: string | undefined) => {
  return useQuery<Game>({
    queryKey: ["singleGameData"],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/api/Match/${matchId}`),
    enabled: !!matchId,
  });
};
