import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDetailsPodcast } from "../api/getDetailsPodcast";
import { Card, Grid, Image, Loading, Text } from "@nextui-org/react";
import EpisodeTable from "./EpisodeTable";
import { CardPodcast } from "./CardPodcast";

export const DetailsPodsCast = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetailsPodcast(id).then((data) => {
      setData(data);
    });
  }, [id]);

  if (data.length === 0) {
    return <Loading />;
  }

  const detailsPodcast = JSON.parse(data);
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
        <CardPodcast
          headerImg={artworkUrl600}
          bodyTitle={artistName}
          body={collectionName}
          footerTitle={"Description:"}
          footer={artistDescription}
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
