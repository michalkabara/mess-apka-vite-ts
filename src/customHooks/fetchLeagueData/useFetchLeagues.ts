import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { League } from "../../types";

export const useFetchLeagues = () => {
  return useQuery<League[] | undefined>({
    queryKey: ["leagueDataNew"],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/League/new`),
  });
};
