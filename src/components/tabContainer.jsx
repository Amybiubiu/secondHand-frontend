import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="学生" component={Link} to="/userLog" />
              <Tab label="管理员" component={Link} to="/adminLog" />
            </Tabs>
          </AppBar>

          <Switch>
            <Route path="/userLog" component={PageShell(UserLog)} />
            <Route path="/adminLog" component={PageShell(AdminLog)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

function UserLog(theme) {
  return (
    <Paper>
      <div>
      <Input
                type="text"
                placeholder="用户名或邮箱"
                value={props.username}
                onChange={this.changeUsername.bind(this)}
       />
      </div>
    </Paper>
  );
}

function AdminLog(theme) {
  return (
    <Paper>
      <div>Item two</div>
    </Paper>
  );
}

const PageShell = (Page, previous) => {
  return props => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionName={props.match.path === "/userLog" ? "SlideIn" : "SlideOut"}
      >
        {console.log(props)}
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
