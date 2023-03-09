import { Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import { SearchComponent } from "../components/SearchComponent";

import "../styles/pages/plp.scss";

export const Plp = () => {
  return (
    <Container
      fluid
      css={{
        maxWidth: "95%",
      }}
    >
      <HeaderComponent />
      <Spacer y={1} />
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row align="center" justify="flex-start">
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
        <Row justify="center">
          <SearchComponent />
        </Row>
      </Grid.Container>
    </Container>
  );
};
