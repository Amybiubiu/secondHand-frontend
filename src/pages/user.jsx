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
  },
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
root2: {
    display: "flex",
    justifyContent: "center",
},
del: {
  background: 'red',
  color: '#fff',
  border: 0,
  borderRadius: 3,
  //boxSizing: "borderBox",
  marginTop: "20px",
  //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 33,
  width: 40,
  padding: '0',
  //width: 300,
  textAlign: "center",
  position:"absolute",
  right: 50
}
}))
const User = () => {
  const list = [
    {
        "product_id": "1",
        "product_name": "冀西南林路行",
        "product_class": "其他",
        "product_pic": "https://img9.doubanio.com/view/subject/m/public/s29629026.jpg",
        "product_describe": "手滑买多了！年度最佳不要错过！",
        "product_state": 1,
        "product_price": 15,
        "product_time": "2020-12-22",
        "product_seller": "可爱多",
        "product_detail": null
    },
    {
        "product_id": "1608468445667",
        "product_name": "计算机课本",
        "product_class": "图书",
        "product_pic": "https://img1.doubanio.com/view/subject/l/public/s29195878.jpg",
        "product_describe": "不可错过的必读书。急出！",
        "product_state": 1,
        "product_price": 50,
        "product_time": "2020-12-14",
        "product_seller": "陆犯焉识",
        "product_detail": "九九新\n双十二求回血！！！！"
    },
    {
        "product_id": "2",
        "product_name": "华为P20",
        "product_class": "电子商品",
        "product_pic": "https://img14.360buyimg.com/n0/jfs/t1/51953/14/4817/848596/5d2893b4Ef31fb698/f6cf3aa8ec91af72.png",
        "product_describe": "性能稳定，备用机首选",
        "product_state": 1,
        "product_price": 300,
        "product_time": "2020-3-5",
        "product_seller": "2048",
        "product_detail": null
    },
    {
        "product_id": "3",
        "product_name": "民俗学",
        "product_class": "图书",
        "product_pic": null,
        "product_describe": "暂无简介",
        "product_state": 1,
        "product_price": 10,
        "product_time": null,
        "product_seller": 2018214875,
        "product_detail": null
    }
];
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    return (
      <div className={classes.root}>
        <div className={classes.list}>
          <List  component="nav" aria-label="secondary mailbox folders">
            <ListItem className={classes.title}>
              <ListItemText primary="商品管理" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${url}/publish`}>
              <ListItemText primary="用户管理" />
            </ListItem>
            <Divider />
          </List>
        </div>
        <Switch>
          <Route exact path={path}>
          <div className={classes.root2}>
        <div className={classes.containner}>
            {list.map((item, index) => {
                return (
                    <div className={classes.item} id={index}>
                        <img className={classes.pic} src={item.product_pic} />
                        <div className={classes.box}>
                            <div className={classes.name}>{item.product_name}</div>
                            <div>{item.product_describe}</div>
                            <div>
                                <span>发布人：{item.product_seller}  </span></div>
                            <div><span>  {item.product_time}</span>
                        </div>
                        </div>
                        <div>
                          <div className={classes.del}>删除</div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
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