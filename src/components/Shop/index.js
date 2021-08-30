import React, { useContext } from "react";
import shopContext from "../ShopContext";
import useFetch from "../useFetch";
import Container from "./Container";
import Card from "../Card";
import Loading from "../shared/Loading";

function Shop() {
  // eslint-disable-next-line no-unused-vars
  const context = useContext(shopContext);

  const { data: items, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return loading ? (
    <Loading>Loading....</Loading>
  ) : (
    <Container>
      {items.map((i) => (
        <Card
          key={i.id}
          id={i.id}
          title={i.title}
          image={i.image}
          price={parseInt(i.price)}
        />
      ))}
    </Container>
  );
}

export default Shop;
