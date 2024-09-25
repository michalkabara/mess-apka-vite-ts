import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { PagedResponse } from "../../types";
import { Game } from "../../types/gameTypes";

export const useFetchTeamGames = (teamId: string | undefined) => {
  return useQuery<PagedResponse<Game>>({
    queryKey: ["teamGamesData", teamId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Match/team/${teamId}`),
  });
};
