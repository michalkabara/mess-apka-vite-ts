import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { League } from "../../types/leagueTypes";

export const useFetchLeagues = () => {
  return useQuery<League[]>({
    queryKey: ["leagueDataNew"],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/League/new`),
  });
};
