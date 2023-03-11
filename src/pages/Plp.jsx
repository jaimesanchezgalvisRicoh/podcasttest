import { Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import HeaderComponent from "../components/HeaderComponent";
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
        <Row justify="center">
          <SearchComponent />
        </Row>
      </Grid.Container>
    </Container>
  );
};
