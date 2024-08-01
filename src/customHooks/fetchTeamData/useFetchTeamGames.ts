import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { PagedResponse } from "../../types";
import { Game } from "../../types/gameTypes";

export const useFetchTeamGames = (teamId: string | undefined) => {
  return useQuery<PagedResponse<Game>>({
    queryKey: ["teamGamesData", teamId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/team/${teamId}`),
  });
};
