import { Container, Row, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

import brandLogo from "../static/brandLogo.png";
import "../styles/components/headerComponent.scss";

const HeaderComponent = () => {
  return (
    <Container css={{ margin: "0 auto", padding: "0" }}>
      <Row justify="space-between" align="center">
        <Link to={"/"}>
          <img className="logo" src={brandLogo} alt="brand logo" />
        </Link>
      </Row>
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
    </Container>
  );
};

export default HeaderComponent;
