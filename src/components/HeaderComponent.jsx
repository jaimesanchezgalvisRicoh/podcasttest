import { Avatar, Badge, Container, Grid, Row } from "@nextui-org/react";
import { Link } from "react-router-dom";

import brandLogo from "../static/brandLogo.png";
import "../styles/components/headerComponent.scss";

const HeaderComponent = () => {
  return (
    <Container css={{ margin: "0 auto", padding: "0" }}>
      <Row justify="space-between" align="center">
        <Link to={"/phone_solutions"}>
          <img className="logo" src={brandLogo} alt="brand logo" />
        </Link>
      </Row>
    </Container>
  );
};

export default HeaderComponent;
