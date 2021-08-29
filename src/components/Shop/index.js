import React, { useContext } from "react";
import shopContext from "../ShopContext";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

function Shop() {
  // eslint-disable-next-line no-unused-vars
  const context = useContext(shopContext);

  const { data: items, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div>
      <h1>Shop</h1>
      {loading ? (
        <h1>Loading ....</h1>
      ) : (
        items.map((i) => (
          <div key={i.id}>
            <Link to={`/item/${i.id}`}>
              <h2>{i.title}</h2>
            </Link>
            <p>{i.description}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Shop;
