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