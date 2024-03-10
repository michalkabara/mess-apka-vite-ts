import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Player } from "../types";

export const useFecthTeamPlayers = (teamId: string | undefined) => {
  return useQuery<Player[]>({
    queryKey: ["teamPlayersData", teamId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Teams/${teamId}/players`),
  });
};
