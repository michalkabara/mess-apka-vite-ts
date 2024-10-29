import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Game } from "../../types/gameTypes";

export const useFetchTeamLastGames = (teamId: string | undefined, numberOfGames: number) => {
  return useQuery<Game[]>({
    queryKey: ["teamLastGamesData", teamId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/api/Match/team/${teamId}/last/${numberOfGames}`),
  });
};
