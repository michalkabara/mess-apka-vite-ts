import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { Team } from "../../types";

export const useFetchTeamData = (teamId: string | undefined) => {
  return useQuery<Team>({
    queryKey: ["teamData", teamId],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Teams/${teamId}`),
  });
};
