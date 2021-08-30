import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import shopContext from "../ShopContext";
import Container from "./Container";
import Info from "./Info";
import Button from "../shared/Button";
import Form from "./Form";
import ButtonGrp from "./ButtonGrp";
import Loading from "../shared/Loading";

function Item() {
  const { id } = useParams();

  const { data: item, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const context = useContext(shopContext);

  return loading ? (
    <Loading>Loading...</Loading>
  ) : (
    <Container>
      <img src={item.image} alt={item.title} />
      <div>
        <Info>
          <h2>{item.title} </h2>
          <div>
            <label>category : </label> {item.category}
          </div>
          <div>
            <label>price : </label> {parseInt(item.price)} USD
          </div>
          <p>{item.description} </p>
        </Info>

        {isAdded ? (
          <>
            <h4>Item added successfully</h4>
            <ButtonGrp>
              <Button>
                <Link to="/cart">Proceed to checkout</Link>
              </Button>
              <Button primary>
                <Link to="/shop">Continue shopping</Link>
              </Button>
            </ButtonGrp>
          </>
        ) : (
          <Form>
            <div>
              <label>Quantity :</label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                name="number"
                type="number"
                min="1"
              />
            </div>
            <div>
              <label>Total price : </label>
              {parseInt(quantity * item.price)} USD
            </div>
            <Button
              onClick={() => {
                context.addItem(item, quantity);
                setIsAdded(true);
              }}
            >
              add to cart
            </Button>
          </Form>
        )}
      </div>
    </Container>
  );
}

export default Item;
