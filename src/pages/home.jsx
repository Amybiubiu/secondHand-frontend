import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import Fetch from '../service/fetch'

import {Divider} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    header: {
        color: "rgb(145, 145, 145)",
        marginLeft: "320px",
        marginBottom: "20px",
        marginTop: "15px"
    },
    name: {
        fontWeight: 700,
        fontSize: 19,
    },
    item: {
        display: "flex",
        margin: "22px 22px 22px 100px"
    },
    pic:  {
        width: "100px",
        height: "100px",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: 10
    },
    root: {
        display: "flex",
        //justifyContent: "center",
        flexDirection: "row"
    },
    centers: {
        //display: "flex",
        width: "100%"
    },
    box: {
        width: "280px"
    },
    box2: {
        marginRight: 50,
        cursor: "pointer"
    },
    box3: {
        marginRight: 0,
        cursor: "pointer"
    },
    addbtn: {
        background: '#1d4cb5',
        color: '#fff',
        border: 0,
        borderRadius: 3,
        //boxSizing: "borderBox",
        marginTop: "20px",
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 33,
        width: 99,
        padding: '5px 0 0 0',
        //width: 300
        textAlign: "center"
    },
    container: {
        marginLeft: "300px"
    },
    li: {
        textDecoration:"none",
        color: "black",
        fontWeight: 700,
    }
}));

const Home = () => {

    // let history = useHistory();

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if(!token) {
    //         window.location.replace("http://localhost:3000/login")
    //         //history.push('/login');
    //     }
    // },[])

    // useEffect(() => {
    //     Fetch()
    // },[])
    //>>>

    function addToCart(e) {  //添加至购物车
        const account = localStorage.getItem("account")
        const id = e.currentTarget.id
        Fetch(
            '/cart/add',
            {
                data: {
                    'product_id': 1,
                    'user_id': account
                },
                method: 'POST'
            }
        ).then(res => {
            //if(...)状态判断 这里后端封装的有问题
            console.log(res)
            alert("添加购物车成功！")
            //else alert("添加失败，请重新再试。")
            //>>>
        })
    }

    function buy(e) {    //创建订单
        //携带信息跳转至订单页面
        const account = localStorage.getItem("account")
        const id = e.currentTarget.id
        //传入信息 跳转至订单页面 
        //>>>
    }

    const list = [
        {
            "product_id": "10",
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
            "product_id": "8",
            "product_name": "计算机课本",
            "product_class": "图书",
            "product_pic": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2990692698,2166529794&fm=26&gp=0.jpg",
            "product_describe": "不可错过的必读书。急出！",
            "product_state": 1,
            "product_price": 50,
            "product_time": "2020-12-14",
            "product_seller": "陆犯焉识",
            "product_detail": "九九新\n双十二求回血！！！！"
        },
        {
            "product_id": "12",
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
            "product_id": "13",
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

    return (
    <Router className={classes.root}>
        <div className={classes.centers}>
        <div className={classes.header}>首页 {'>'} 商品列表 </div>
        <div className={classes.container}>
            {list.map((item, index) => {
                //const id = item.product_id
                //const path = `/products/${id}`
                return (
                    <div className={classes.item} id={index}>
                        <img className={classes.pic} src={item.product_pic} />
                        <div className={classes.box}>
                            <Link 
                                to={{pathname:`/products/${item.product_id}`}}
                                className={classes.li}
                            >
                            <div className={classes.name}>{item.product_name}</div>
                            </Link>
                            <div>{item.product_describe}</div>
                            <div>
                                <span>发布人：{item.product_seller}  </span></div>
                            <div><span>  {item.product_time}</span>
                            </div>
                        </div>
                        <div className={classes.box2}>
                            <div className={classes.addbtn}
                                id={item.product_id}
                                onClick={(e)=>{addToCart(e)}}
                            >添加购物车</div>
                        </div>
                        <div className={classes.box3}
                            id={item.product_id}
                            onClick={(e)=>{buy(e)}}
                        >
                            <div className={classes.addbtn}>立即购买</div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>

    </Router>

    )
}

export default Home