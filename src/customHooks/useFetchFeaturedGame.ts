import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { Game } from "../types/gameTypes";

export const useFetchFeaturedGame = () => {
  return useQuery<Game>({
    queryKey: ["featuredGame"],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/featured`),
  });
};
