import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PublishIcon from "@material-ui/icons/Publish";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(() => ({
  container: {
    margin: "30px 20px 30px auto",
    width: "fit-content"
  },
  link: {
    display: "flex",
    fontSize: '20px'
  },
  icon: {
    marginRight: 5,
    width: 30,
    height: 30,
  },
}));

function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
}

export default function Navbar() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.container}>
      <Link
        color="inherit"
        href="/"
        onClick={handleClick}
        className={classes.link}
      >
        <HomeIcon className={classes.icon} />
        首页
      </Link>
      <Link
        color="inherit"
        href="/cart"
        onClick={handleClick}
        className={classes.link}
      >
        <ShoppingCartIcon className={classes.icon} />
        购物车
      </Link>
      <Link
        color="inherit"
        href="/publish"
        onClick={handleClick}
        className={classes.link}
      >
        <PublishIcon className={classes.icon} />
        发布
      </Link>
      <Link
        color="inherit"
        href="/user"
        onClick={handleClick}
        className={classes.link}
      >
        <AccountCircleIcon className={classes.icon} />
       用户中心
      </Link>
    </Breadcrumbs>
  );
}
