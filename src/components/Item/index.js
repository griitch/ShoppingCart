import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function Item() {
  const { id } = useParams();

  const { data: item, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  console.log(item);

  return loading ? (
    <h1>Loading .... </h1>
  ) : (
    <div>
      <h1>{item.title} </h1>
      <h2>{item.category} </h2>
      <h3>{item.price} USD </h3>
      <p>{item.description} </p>
    </div>
  );
}

export default Item;
