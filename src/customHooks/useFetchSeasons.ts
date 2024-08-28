import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";

export const useFetchSeasons = () => {
  return useQuery({
    queryKey: ["seasonsData"],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/StaticData/seasons`),
  });
};
