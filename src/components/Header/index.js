import React, { useContext } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import shopContext from "../ShopContext";

function Header() {
  const num = useContext(shopContext).items.length;

  return (
    <Container>
      <Link to="/">
        <h2>logo</h2>
      </Link>

      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart (items: {num}) </Link>
          {/* add an svg here !!!*/}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
