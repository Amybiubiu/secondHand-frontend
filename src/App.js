import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles"
import {Divider} from "@material-ui/core"
import sysTheme from "./theme"
import Navbar from "./components/navbar";

import Home from "./pages/home";
//import Login from "./pages/login";
import Cart from "./pages/cart";
import Publish from "./pages/publish";
import User from "./pages/user";
import Product from "./pages/product";
import Test from "./pages/test";//del
function App() {
  return (
    <ThemeProvider theme={sysTheme}>
      <BrowserRouter>
        <Navbar />
        <Divider />
        <div >
          <Switch>
          <Route path="/test">
              <Test />
            </Route>
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
            <Route path="/products/:productId">
              <Product />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
