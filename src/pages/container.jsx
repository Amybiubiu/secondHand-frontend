import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

import Cart from "./cart";
import Publish from "./publish";
import User from "./user";
import Product from "./product";
import Navbar from "../components/navbar";
import Home from "./home";

import {Divider} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    header: {
        color: "rgb(145, 145, 145)",
        marginLeft: "10px",
        marginBottom: "20px",
    },
    name: {
        fontWeight: 700,
        fontSize: 19,
    },
    item: {
        display: "flex",
        margin: "22px"
    },
    pic:  {
        width: "100px",
        height: "100px",
        marginLeft: "10px",
        marginRight: "10px"
    },
    r: {
        display: "flex",
        //justifyContent: "center",
        flexDirection: "row"
    },
    c: {
        //display: "flex",
        width: "100%"
    }
}));

const Container = () => {

    const classes = useStyles();

    return (
    <Router className={classes.r}>
        <div className={classes.c}>
        <Navbar />
        <Divider />

        <Switch>
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
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
        </div>
    </Router>

    )
}

export default Container