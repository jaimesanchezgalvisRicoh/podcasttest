import { Container, Grid, Input, Loading, Row, Text } from "@nextui-org/react";
import { useForm } from "../hooks/useForm";
import { useQuery } from "react-query";
import { getPodCast } from "../api/getPodCast";
import PodCastCard from "./PodCastCard";

export const SearchComponent = () => {
  const { data, status } = useQuery("podcast", getPodCast, {
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const results = !searchText
    ? data
    : data.filter((podcast) =>
        podcast.title.label.toLowerCase().includes(searchText.toLowerCase())
      );

  return (
    <Container fluid>
      <Row justify="flex-end">
        <form action="">
          <Input
            type="text"
            labelPlaceholder="Filter podcasts..."
            name="searchText"
            color="default"
            value={searchText}
            onChange={onInputChange}
            clearable
            onClearClick={onResetForm}
          />
        </form>
      </Row>
      <Row>
        <Grid.Container gap={2} alignItems="center" justify="center">
          {results?.map((product) => (
            <PodCastCard key={product.id.attributes["im:id"]} {...product} />
          ))}
          {status === "loading" && <Loading />}
        </Grid.Container>
      </Row>
    </Container>
  );
};
