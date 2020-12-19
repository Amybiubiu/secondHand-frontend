import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import Cart from "./pages/cart";
import Publish from "./pages/publish";
import User from "./pages/user";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="products/:productId">
            <Product />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
