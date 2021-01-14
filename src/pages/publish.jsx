import React,{useState, useEffect}from "react"
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Fetch from "../service/fetch";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    li: {
        textDecoration:"none"
    },
    item: {
        marginLeft: "200px",
        //marginBottom: "10px"
    },
    header: {
        color: "rgb(145, 145, 145)",
        marginLeft: "50px",
        marginBottom: "20px",
        marginTop: "15px"  
    },
    front: {
        //marginLeft: "300px",
        marginBottom: "20px",
        marginTop: "15px",
        width: 100,
        display: "inline-block",
        paddingRight: 20,
        //padding: "3px 6px"

    },
    container: {
        margin: "0 auto",
        width: "800px"
    },
    area: {
        //marginTop: 100
    },
    footer: {
        display: "flex",
        //justifyContent: "center"
        paddingLeft: "140px",
        marginTop: 20,
    },
    btn: {
        cursor: "pointer",
        background: '#1d4cb5',
        color: '#fff',
        border: 0,
        borderRadius: 3,
        textAlign: "center",
        height: 33,
        width: 99,
        padding: '5px 0 0 0',
        marginLeft: 60,
        marginRight: 60,
        
    }
}));

const Publish = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [intro, setIntro] = useState("");
    const [detail, setDetail] = useState("");


    function getFormatDate() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentDate = date.getFullYear() + "-" + month + "-" + strDate
                + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        return currentDate;
    }


    function submit() {
        if(name && type && price && intro && detail) {
 
            const account = localStorage.getItem("account")
            let time = getFormatDate() 
            console.log(time) //
            Fetch(
                '/goods/publish',
                {
                    data: {
                        'name': name,
                        'type': type, 
                        'describe': intro,
                        'detail': detail, 
                        'user': account, 
                        'price': price, 
                        'time': time
                    },
                    method: 'POST'
                }
            ).then(res  =>{
                console.log(res)
                if(res.code == 0) {
                    alert("发布失败，请稍后重试。")
                    
                } else {
                    alert("二手商品发布成功！")
                }
            })
        } else {
            alert("商品条目不能为空！")
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
            <div className={classes.header}>当前位置 {'>'} 商品发布</div>
            <form>
                <div className={classes.item}>
                    <label className={classes.front}>商品名</label>
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.front}>商品类别</label>
                    <input 
                        value={type}
                        onChange={e => setType(e.target.value)}
                        type="text"
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.front}>商品价格</label>
                    <input 
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        type="text"
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.front}>商品简介</label>
                    <input 
                        value={intro}
                        onChange={e => setIntro(e.target.value)}
                        type="text"
                    />
                </div>
                <div className={classes.item}>
                    <label className={classes.front}>商品描述</label>
                </div>
                <div className={classes.item}>
                    <textarea
                        rows="7" cols="37"
                        value={detail}
                        onChange={e => setDetail(e.target.value)}
                        className={classes.area}
                    />
                </div>
                <div className={classes.footer}>
                    <div
                        onClick={() => {submit()}}
                        className={classes.btn}
                    >发布</div>
                    <Link 
                        to='/'
                        className={classes.li}
                    >
                        <div
                            className={classes.btn}
                        >取消</div>
                    </Link>
                </div>
            </form>
            </div>

        </div>
    )
}

export default Publish