import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";

export const useFetchTeams = () => {
  return useQuery({
    queryKey: ["teamDataOld"],
    queryFn: () => fetchData("https://jte-edge.b-cdn.net/teams.json"),
  });
};
