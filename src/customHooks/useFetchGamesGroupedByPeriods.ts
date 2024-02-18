import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";

export const useFetchGamesGroupedByPeriod = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchData("https://jte-edge.b-cdn.net/matches2.json"),
    select: (data) => {
      data.reverse();
      const groupedData = Object.groupBy(data, (item) => item.Period);
      return groupedData;
    },
  });
};
