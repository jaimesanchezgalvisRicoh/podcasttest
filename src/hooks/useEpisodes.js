import { useQuery } from "react-query";
import { getDetailsEpisodes } from "../api/getDetailsEpisodes";
import { useContext } from "react";
import { EpisodesContext } from "../context/EpisodesContext";

export const useEpisodes = (feedUrl) => {
  const { setEpisodesData } = useContext(EpisodesContext);

  const { data, isLoading } = useQuery(
    ["episodes", feedUrl],
    () => getDetailsEpisodes(feedUrl),
    {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24,
      onSuccess: (data) => {
        setEpisodesData(data);
      },
    }
  );

  return { data, isLoading };
};
