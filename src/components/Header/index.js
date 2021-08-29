import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
