import styled from "styled-components";
import Container from "./Container";

const CartItem = styled(Container)`
  width: 100%;
  padding: 1rem 0;
  margin: 0;
  border-bottom: solid 1px black;
  & button {
    margin: 0.5rem auto;
  }
`;

export default CartItem;
