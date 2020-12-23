import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import {UserPublish, UserBuy, UserSell} from './userAbout'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  list: {
    width: '100%',
    maxWidth: 360
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    fontSize: '24px'
  }
}))
const User = () => {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    return (
      <div className={classes.root}>
        <div className={classes.list}>
          <List  component="nav" aria-label="secondary mailbox folders">
            <ListItem className={classes.title}>
              <ListItemText primary="物品管理" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${url}/publish`}>
              <ListItemText primary="我的发布" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${url}/buy`}>
              <ListItemText primary="我的购买" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${url}/sell`}>
              <ListItemText primary="我的卖出" />
            </ListItem>
            <Divider />
            <ListItem className={classes.title}>
              <ListItemText primary="评论管理" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${url}/publish`}>
              <ListItemText primary="我发出的评论" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${url}/publish`}>
              <ListItemText primary="我收到的评论" />
            </ListItem>
            <Divider />
          </List>
        </div>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/publish`}>
            <UserPublish />
          </Route>
          <Route path={`${path}/buy`}>
            <UserBuy />
          </Route>
          <Route path={`${path}/sell`}>
            <UserSell />
          </Route>
        </Switch>
      </div>
    );
}

export default User