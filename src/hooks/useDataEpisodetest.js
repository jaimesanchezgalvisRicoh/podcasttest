import { useQuery } from "react-query";
import { getDataEpisode } from "../api/getDataEpisode";

export const useDataEpisode = (url) => {
  return useQuery(["categoryEpisodes", url], () => getDataEpisode(url), {
    refetchOnWindowFocus: false,
    cacheTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
