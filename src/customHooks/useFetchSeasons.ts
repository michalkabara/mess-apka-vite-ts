import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";

export const useFetchSeasons = () => {
  return useQuery({
    queryKey: ["seasonsData"],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/api/StaticData/seasons`),
  });
};
