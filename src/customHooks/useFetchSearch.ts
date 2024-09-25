import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { SearchResultsResponse } from "../types";

export const useFetchSearch = (query: string | undefined) => {
  return useQuery<SearchResultsResponse>({
    queryKey: ["searchData", query],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Search/${query}`),
    enabled: !!query,
  });
};
