import { Container } from "@nextui-org/react";
import { DetailsPodsCast } from "../components/DetailsPodsCast";
import HeaderComponent from "../components/HeaderComponent";

export const Pdp = () => {
  return (
    <Container
      fluid
      css={{
        maxWidth: "95%",
      }}
    >
      <HeaderComponent />
      <DetailsPodsCast />
    </Container>
  );
};
