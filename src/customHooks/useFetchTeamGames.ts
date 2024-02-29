import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Game } from "../types";

export const useFetchTeamGames = (teamId: string | undefined) => {
  return useQuery<Game[]>({
    queryKey: ["teamGamesData", teamId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/team/${teamId}`),
  });
};
