import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { groupBy } from "remeda";
import { GameType } from "../types";

export const useFetchGamesGroupedByPeriod = () => {
  return useQuery({
    queryKey: ["gamesGroupedByPeriodsData"],
    queryFn: () => fetchData("https://api-beta.trybuna.tv/api/League"),
    select: (data) => {
      data.reverse();
      const groupedData = groupBy(data, (item: GameType) => item.Period);
      return groupedData;
    },
  });
};
