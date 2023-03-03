import { Container, Grid, Input, Loading, Row, Text } from "@nextui-org/react";

export const SearchComponent = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <Container fluid>
      <Grid.Container gap={2} justify="space-evenly" align="center">
        <Row justify="flex-end">
          <form action="" onSubmit={handleSubmit}>
            <Input
              type="text"
              labelPlaceholder="Search"
              name="query"
              color="default"
              // value={search}
              // onChange={handleChange}
              clearable
              // onClearClick={clearSearch}
            />
          </form>
        </Row>
        {/*{searchText ? (
          <>
            <Row gap={2} align="center" justify="flex-start">
              <Text>Results:</Text>
            </Row>
            <Row gap={2} align="center" justify="flex-start">
              <Loading type="points-opacity" />
            </Row>
          </>
        ) : null}
        {producto.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })} */}
      </Grid.Container>
    </Container>
  );
};
