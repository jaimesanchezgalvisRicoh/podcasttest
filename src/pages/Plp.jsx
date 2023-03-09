import { Container, Grid, Loading, Row, Spacer, Text } from "@nextui-org/react";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import { getPodCast } from "../api/getPodCast";
import { SearchComponent } from "../components/SearchComponent";
import { useQuery } from "react-query";

import "../styles/pages/plp.scss";
import PodCastCard from "../components/PodCastCard";

export const Plp = () => {
  const { data, status } = useQuery("podcast", getPodCast, {
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });

  return (
    <Container fluid>
      <HeaderComponent />
      <Spacer y={1} />
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row justify="flex-end">
          0
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

        <Grid.Container gap={2} alignItems="center" justify="center">
          {data?.map((product) => (
            <PodCastCard key={product.id.attributes["im:id"]} {...product} />
          ))}
          {status === "loading" && <Loading />}
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};
