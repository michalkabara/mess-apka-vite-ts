import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { League } from "../types";

export const useFetchLeagues = () => {
  return useQuery<League[]>({
    queryKey: ["leagueDataNew"],
    queryFn: () => fetchData("https://api-beta.trybuna.tv/api/League/new"),
  });
};
