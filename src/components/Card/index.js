import { Link } from "react-router-dom";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import Price from "./Price";

function Card({ title, id, image, price }) {
  return (
    <Link to={`/item/${id}`}>
      <Container>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Price>{price} USD</Price>
      </Container>
    </Link>
  );
}

export default Card;
