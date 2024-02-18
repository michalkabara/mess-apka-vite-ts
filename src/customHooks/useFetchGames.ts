import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";

export const useFetchGames = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchData("https://jte-edge.b-cdn.net/matches2.json"),
    select: (data) => data.reverse(),
  });
};
