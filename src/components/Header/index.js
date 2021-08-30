import React, { useContext } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import shopContext from "../ShopContext";

function Header() {
  const num = useContext(shopContext).items.length;

  return (
    <Container>
      <Link to="/">
        <h2>Home</h2>
      </Link>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart {num > 0 && `${num} items`} </Link>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
