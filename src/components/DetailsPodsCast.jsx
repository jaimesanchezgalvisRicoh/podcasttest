import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsPodcast } from "../api/getDetailsPodcast";
import { Grid, Loading } from "@nextui-org/react";
import EpisodeTable from "./EpisodeTable";
import { CardPodcast } from "./CardPodcast";
import { CardLeftPodcast } from "./CardLeftPodcast";
import { EpisodesContext } from "../context/EpisodesContext";


export const DetailsPodsCast = () => {
  const [dataEpisodes, setDataEpisodes] = useState([]);
  const { id } = useParams();
  const { setArtistName } = useContext(EpisodesContext);

  useEffect(() => {
    getDetailsPodcast(id).then((data) => {
      setDataEpisodes(data);
      const detailsPodcast = JSON.parse(data);
      const { results } = detailsPodcast;
      const { artistName } = results[0];
      setArtistName(artistName);
    });
  }, [id, setArtistName]);

  if (dataEpisodes.length === 0) {
    return <Loading />;
  }

  const detailsPodcast = JSON.parse(dataEpisodes);
  const { results } = detailsPodcast;

  const {
    artistName,
    artworkUrl600,
    feedUrl,
    collectionName,
    trackCount,
    collectionId,
    artistDescription,
  } = results[0];

  return (
    <Grid.Container gap={3} css={{ margin: "0 auto", maxWidth: "90%" }}>
      <Grid xs={12} sm={3}>
        <CardLeftPodcast
          headerImg={artworkUrl600}
          bodyTitle={collectionName}
          body={`by ${artistName}`}
          footerTitle={"Description:"}
          footer={artistDescription}
          feedUrl={feedUrl}
        />
      </Grid>
      <Grid
        xs={12}
        sm={9}
        css={{
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <CardPodcast headerTitle={`Episodes: ${trackCount}`} />
        {collectionId ? (
          <EpisodeTable feedUrl={feedUrl} idPodcast={id} />
        ) : null}
      </Grid>
    </Grid.Container>
  );
};
