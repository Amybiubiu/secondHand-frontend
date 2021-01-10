import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles"

import sysTheme from "./theme"

import Admin from "./pages/admin"
import Container from "./pages/container";
import Login from "./pages/login";

function App() {
  return (
    <ThemeProvider theme={sysTheme}>
      <BrowserRouter>
        <div >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Container />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
