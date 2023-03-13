import { Card, Grid, Text, Image, Row, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";

const CardPodCastMain = ({ ...props }) => {
  return (
    <Grid>
      <Link to={props.id.attributes["im:id"]}>
        <Row
          justify="center"
          css={{
            marginBottom: "-60px",
            zIndex: "5",
          }}
        >
          <Image
            src={props["im:image"][2].label}
            alt="Product Image"
            objectFit="cover"
            css={{
              width: "100%",
              height: "100%",
              borderRadius: "180%",
              filter: "none",
              boxShadow: "rgb(174 174 179) 1px -1px 5px 1px",
              "&:hover": {
                transform: "scale(1.006)",
              },
            }}
          />
        </Row>
        <Card
          isPressable
          isHoverable
          css={{
            w: "100%",
            minWidth: "278px",
            alignContent: "center",
          }}
        >
          <Card.Header css={{}}>
            <Spacer y={1} />
          </Card.Header>
          <Card.Body
            css={{
              textAlign: "center",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            <Text
              css={{
                color: "rgb(80 84 86)",
                marginBottom: "0",
              }}
              weight="bold"
            >
              {props["im:artist"].label}
            </Text>
          </Card.Body>
          <Card.Footer
            css={{
              textAlign: "center",
              justifyContent: "center",
              padding: "10px",
              maxWidth: "200px",
            }}
          >
            <Row align="center" justify="center">
              <Text
                css={{
                  color: "rgb(80 84 86)",
                  margin: "0",
                }}
              >
                Author: {props["im:name"].label}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Link>
    </Grid>
  );
};

export default CardPodCastMain;
