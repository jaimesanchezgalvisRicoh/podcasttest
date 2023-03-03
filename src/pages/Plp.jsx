import React, { useEffect, useState } from "react";
import { Container, Grid, Loading, Row, Spacer, Text } from "@nextui-org/react";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import { getPodCast } from "../api/getPodCast";
import { SearchComponent } from "../components/SearchComponent";

import "../styles/pages/plp.scss";
import PodCastCard from "../components/PodCastCard";

export const Plp = () => {
  const [dataPodcast, setDataPodcast] = useState([]);

  useEffect(() => {
    getPodCast().then((data) => {
      setDataPodcast(data);
    });
  }, []);

  return (
    <Container fluid>
      <HeaderComponent />
      <Spacer y={1} />
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row justify="flex-end">
          <SearchComponent />
        </Row>
        <Row gap={2} align="center" justify="flex-start">
          <Link to={"/"}>
            <Text
              css={{
                color: "#18738f",
              }}
              weight="bold"
            >
              PodCaster:
            </Text>
          </Link>
        </Row>
        <hr />

        <Grid.Container gap={2}alignItems="center" justify="center">
          {dataPodcast.length > 0 ? (
            dataPodcast.map((product) => {
              return (
                <PodCastCard
                  key={product.id.attributes["im:id"]}
                  {...product}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};
