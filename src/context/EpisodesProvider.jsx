import { useState } from "react";
import { EpisodesContext } from "./EpisodesContext";
import { AppRouter } from "../router/AppRouter";

export const EpisodesProvider = ({ children }) => {
  const [episodesData, setEpisodesData] = useState([]);
  const [artistName, setArtistName] = useState("");

  return (
    <EpisodesContext.Provider
      value={{ episodesData, setEpisodesData, artistName, setArtistName }}
    >
      <AppRouter />
    </EpisodesContext.Provider>
  );
};
