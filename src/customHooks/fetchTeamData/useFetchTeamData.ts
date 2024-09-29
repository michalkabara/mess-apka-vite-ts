import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Team } from "../../types/teamTypes";

export const useFetchTeamData = (teamId: string | undefined) => {
  return useQuery<Team>({
    queryKey: ["teamData", teamId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/api/Teams/${teamId}`),
  });
};
