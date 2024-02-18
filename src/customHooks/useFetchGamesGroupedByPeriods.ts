import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { groupBy } from "remeda";
import { gameType } from "../types";

export const useFetchGamesGroupedByPeriod = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchData("https://jte-edge.b-cdn.net/matches2.json"),
    select: (data) => {
      data.reverse();
      const groupedData = groupBy(data, (item: gameType) => item.Period);
      return groupedData;
    },
  });
};
