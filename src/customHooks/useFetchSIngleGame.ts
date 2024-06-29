import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { Game } from "../types";

export const useFetchSingleGame = (matchId: string | undefined) => {
  return useQuery<Game>({
    queryKey: ["singleGameData"],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/${matchId}`),
    enabled: !!matchId,
  });
};
