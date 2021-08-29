import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Shop from "./Shop";
import About from "./About/About";
import Cart from "./Cart/Cart";
import Item from "./Item";

function Routes() {
  return (
    <Switch>
      <Route path="/shop">
        <Shop />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/item/:id">
        <Item />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default Routes;
