import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {UserPublish, UserBuy, UserSell} from './userAbout'

const User = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
          <h2>Topics</h2>
          <ul>
            <li>
              <Link to={`${url}/publish`}>我的发布</Link>
            </li>
            <li>
              <Link to={`${url}/buy`}>我的购买</Link>
            </li>
            <li>
              <Link to={`${url}/sell`}>我的卖出</Link>
            </li>
            {/* <li>
              <Link to={`${url}/comments-send`}>Props v. State</Link>
            </li>
            <li>
              <Link to={`${url}/comments-receive`}>Props v. State</Link>
            </li> */}
          </ul>
    
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