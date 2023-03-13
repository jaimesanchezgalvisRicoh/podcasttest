import { Card, Image, Text } from "@nextui-org/react";
import { useEpisodes } from "../hooks/useEpisodes";

export const CardLeftPodcast = ({
  headerImg,
  headerTitle,
  headerContent,
  bodyTitle,
  body,
  footerTitle,
  footer,
  feedUrl,
}) => {
  
  const { data } = useEpisodes(feedUrl);
  const  description  = data?.description;

  const regex = /(<([^>]+)>)/gi;
  const cleanDescription = description?.replace(regex, "");

  

  return (
    <Card
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
        {headerImg ? (
          <Image
            width={"80%"}
            src={headerImg}
            css={{
              borderRadius: "5px",
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
              width: "95%",
            }}
            weight="bold"
          >
            {bodyTitle}
          </Text>
          <Text
            css={{
              color: "rgb(80 84 86)",
              marginTop: "0.2rem",
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
            width: "95%",
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
              width: "fit-content",
              maxWidth: "95%",
              marginTop: "0.5rem",
            }}
          >
            {cleanDescription}
          </Text>
        </Card.Footer>
      ) : null}
    </Card>
  );
};
