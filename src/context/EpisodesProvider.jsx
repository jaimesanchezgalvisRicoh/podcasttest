import { useState } from "react";
import { EpisodesContext } from "./EpisodesContext";
import { AppRouter } from "../router/AppRouter";

export const EpisodesProvider = ({ children }) => {
  const [episodesData, setEpisodesData] = useState([]);

  return (
    <EpisodesContext.Provider value={{ episodesData, setEpisodesData }}>
      <AppRouter/>
    </EpisodesContext.Provider>
  );
};
