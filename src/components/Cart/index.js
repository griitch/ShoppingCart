import React, { useContext } from "react";
import Container from "./Container";
import shopContext from "../ShopContext";
import CartItem from "./CartItem";
import Button from "../shared/Button";
import PayNow from "./PayNow";
import MsgContainer from "../shared/MsgContainer";
import { Link } from "react-router-dom";

function Cart() {
  const context = useContext(shopContext);
  return (
    <Container>
      {context.items.map((item) => (
        <CartItem key={item.id}>
          <div>
            Product : <b>{item.title} </b>
          </div>
          <div>
            Price : <b>{parseInt(item.price)} </b>
          </div>
          <div>
            Quantity : <b>{item.quantity} </b>
          </div>
          <div>
            Total : <b> {parseInt(item.quantity * item.price)} </b>
          </div>
          <Button onClick={() => context.removeItem(item.id)}>Remove</Button>
        </CartItem>
      ))}
      <hr />

      {context.items.length > 0 ? (
        <PayNow>
          <h3>
            {"Total :" +
              context.items.reduce(
                (a, v) => a + parseInt(v.price) * v.quantity,
                0
              )}
          </h3>
          <Button primary>Pay now</Button>
        </PayNow>
      ) : (
        <MsgContainer>
          <h2>Your cart is empty</h2>
          <Link to="/shop">
            <Button>Discover our catalog</Button>
          </Link>
        </MsgContainer>
      )}
    </Container>
  );
}

export default Cart;
