import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Team } from "../../types";

export const useFetchTeamData = (teamId: string | undefined) => {
  return useQuery<Team>({
    queryKey: ["teamData", teamId],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Teams/${teamId}`),
  });
};
