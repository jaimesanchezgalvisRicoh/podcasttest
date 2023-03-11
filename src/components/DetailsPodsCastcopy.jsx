import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getDetailsPodcast } from "../api/getDetailsPodcast";
import {
  Card,
  Container,
  Grid,
  Image,
  Loading,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { reqListener } from "../helpers/reqListener";

export const DetailsPodsCast = () => {
  const [data, setData] = useState([]);
  const [rssData, setRssData] = useState("");
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
  console.log(results);

  const {
    artistName,
    artworkUrl600,
    feedUrl,
    trackName,
    collectionName,
    trackViewUrl,
    trackCount,
    releaseDate,
    primaryGenreName,
    trackTimeMillis,
    trackPrice,
    currency,
  } = results[0];

  function reqListener() {
    console.log(this.responseXML);
    const description =
      this.responseXML.getElementsByTagName("description")[0].childNodes[0]
        .nodeValue;

    setRssData(description);
  }

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", `${feedUrl}`);
  req.send();

  const CardPodcast = ({
    headerImg,
    headerTitle,
    headerContent,
    bodyTitle,
    body,
    footerTitle,
    footer,
  }) => {
    return (
      <Card
        isPressable
        isHoverable
        css={{
          alignContent: "center",
          flexWrap: "wrap",
          height: "fit-content",
        }}
      >
        <Card.Header
          css={{
            flexDirection: "column",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Image
            width={"80%"}
            src={headerImg}
            css={{
              borderRadius: "3px",
              margin: "0 auto",
              paddingBottom: "10px",
            }}
          />
          <Text
            css={{
              color: "rgb(80 84 86)",
              margin: "0",
              width: "95%",
              textAlign: "initial",
              marginBottom: "0",
            }}
            weight="bold"
          >
            {headerTitle}
          </Text>
          <Text
            css={{
              color: "rgb(80 84 86)",
              marginTop: "0",
              width: "95%",
            }}
          >
            {headerContent}
          </Text>
        </Card.Header>
        <Card.Body
          css={{
            paddingTop: "0",
            marginLeft: "25px",
          }}
        >
          <Text
            css={{
              color: "rgb(80 84 86)",
              marginBottom: "0",
              marginTop: "0",
            }}
            weight="bold"
          >
            {bodyTitle}
          </Text>
          <Text
            css={{
              color: "rgb(80 84 86)",
              marginTop: "0",
            }}
          >
            {body}
          </Text>
        </Card.Body>
        <Card.Footer
          css={{
            flexDirection: "column",
            marginLeft: "20px",
            alignItems: "flex-start",
            paddingTop: "0",
          }}
        >
          <Text
            css={{
              color: "rgb(80 84 86)",
              margin: "0",
            }}
            weight="bold"
          >
            {footerTitle}
          </Text>
          <Text
            css={{
              color: "rgb(80 84 86)",
              margin: "0",
            }}
          >
            {footer}
          </Text>
        </Card.Footer>
      </Card>
    );
  };

  return (
    <Grid.Container gap={3} width="100%">
      <Grid xs={12} sm={3}>
        <CardPodcast
          headerImg={artworkUrl600}
          bodyTitle={artistName}
          body={collectionName}
          footerTitle={"Description:"}
          footer={rssData}
        />
      </Grid>
      <Grid xs={12} sm={9}>
        <CardPodcast
          headerTitle={`Episodes: ${trackCount}`}
          headerContent="Title"
          // bodyTitle={artistName}
          body={"rss"}
          // footer={artistName}
        />
      </Grid>
    </Grid.Container>
  );
};
