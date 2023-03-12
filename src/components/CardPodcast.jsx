import { Card, Image, Text } from "@nextui-org/react";
import React from "react";

export const CardPodcast = ({
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
      // isPressable
      // isHoverable
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
        {headerImg ? (
          <Image
            width={"80%"}
            src={headerImg}
            css={{
              borderRadius: "3px",
              margin: "0 auto",
              paddingBottom: "10px",
            }}
          />
        ) : null}
        <Text
          css={{
            color: "rgb(80 84 86)",
            margin: "0",
            width: "95%",
            textAlign: "initial",
            marginBottom: "0",
            maxWidth: "90%",
          }}
          weight="bold"
        >
          {headerTitle}
        </Text>
        {headerContent ? (
          <Text
            css={{
              color: "rgb(80 84 86)",
              marginTop: "0",
              width: "95%",
            }}
          >
            {headerContent}
          </Text>
        ) : null}
      </Card.Header>
      {bodyTitle ? (
        <Card.Body
          css={{
            paddingTop: "0",
            marginLeft: "25px",
            maxWidth: "90%",
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
      ) : null}
      {footerTitle ? (
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
      ) : null}
    </Card>
  );
};
