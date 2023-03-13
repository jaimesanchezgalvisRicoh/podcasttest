import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@nextui-org/react";
import HeaderComponent from "./HeaderComponent";
import { CardPodcast } from "./CardPodcast";
import { EpisodesContext } from "../context/EpisodesContext";

export const DetailsEpisode = () => {
  const { id } = useParams();

  const data = useContext(EpisodesContext);
  const episodesData = data?.episodesData?.episodeList;

  const episodeData = episodesData?.find((episode) => episode.id === id);

  const regex = /(<([^>]+)>)/gi;
  const cleanDescription = episodeData?.description.replace(regex, "");

  return (
    <div>
      <HeaderComponent />
      <Grid.Container
        gap={3}
        width="100%"
        css={{ margin: "0 auto", maxWidth: "90%" }}
      >
        <Grid xs={12} sm={3}>
          <CardPodcast
            headerImg={episodeData?.thumbnail}
            bodyTitle={episodeData?.title}
            body={cleanDescription}
          />
        </Grid>
        <Grid
          xs={12}
          sm={9}
          direction="column"
          gap={2}
        >
          <CardPodcast
            headerTitle={episodeData?.title}
            headerContent={cleanDescription}
          />
          <audio controls style={{ width: "100%", marginTop: "1rem" }}>
            <source src={episodeData?.audioUrl} type="audio/mpeg" />
            Tu navegador no soporta la reproducción de audio.
          </audio>
        </Grid>
      </Grid.Container>
    </div>
  );
};
