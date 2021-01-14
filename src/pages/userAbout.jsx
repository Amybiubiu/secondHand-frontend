import React,{useState, useEffect} from "react"
import Fetch from '../service/fetch'
import { makeStyles } from '@material-ui/core/styles'
import Product from '../components/product'
import pic1 from '../img/default.png'
import pic2 from '../img/book2.JPG'
import pic3 from '../img/book3.JPG'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: '20px 80px',
        flexWrap: 'wrap'
    },
    item: {
        margin: '20px',
    },
    img: {
        width: '100px',
        height: '100px',
        borderRadius: '20px'
    },
    table: {
        margin: '20px',
        borderCollapse: 'collapse',
        '& tr': {
            borderBottom: `2px solid ${theme.palette.divider}`
        }
    },
    commentDetail: {
        width:230
    }
}))
export function UserPublish(){
    const classes = useStyles();
    const [state, setState] = useState([]);
    useEffect(()=>{
        Fetch('/user/publish?user_id=2018214877').then(
            res => {
                console.log(res.data)
                setState(res.data)
            }
        )
    },[])
    return (
        <div className={classes.root}>
            {state.map(item =>(
                <div className={classes.item}>
                    <Product name={item.product_name} 
                    category={item.product_class} 
                    pic={item.product_pic} 
                    prices={item.product_price} 
                    state={item.product_state} />
                </div>
            ))}
        </div>
    )
}

export function UserBuy(){
    const classes = useStyles();
    const [state, setState] = useState([]);
    useEffect(()=>{
        Fetch('/user/buy?user_id=2018214877').then(
            res => {
                console.log(res.data)
                setState(res.data)
            }
        )
    },[])
    return (
        <div className={classes.root}>
            {state.map(item =>(
                <div className={classes.item} key={item.product_id}>
                    <Product name={item.product_name} 
                    category={item.product_class} 
                    pic={item.product_pic} 
                    prices={item.product_price} 
                    state={item.product_state} />
                </div>
            ))}
        </div>
    )
}

export function UserSell(){
    const classes = useStyles();
    const [state, setState] = useState([]);
    useEffect(()=>{
        Fetch('/user/sell?user_id=2018214877').then(
            res => {
                console.log(res.data)
                setState(res.data)
            }
        )
    },[])
    return (
        <div className={classes.root}>
            {state.map(item =>(
                <div className={classes.item} key={item.product_id}>
                    <Product name={item.product_name} 
                    category={item.product_class} 
                    pic={item.product_pic} 
                    prices={item.product_price} 
                    userName={item.user_name} />
                </div>
            ))}
        </div>
    )
}

export function ReceiveMessage(){
    const [state, setState] = useState([])
    const classes = useStyles();
    useEffect(()=>{
        Fetch('/comments/receive?user_id=2018214877').then(
            res => {
                setState(res.data);
            }
        )
    }, [])
    return (
        <div>
            <table className={classes.table}>
                <tr style={{fontWeight: '500'}}>
                    <td>评论内容</td>
                    <td style={{minWidth: '300px'}}>{`商品信息`}</td>
                    <td>评论人</td>
                </tr>
                {state.map((item, index) =>
                    <tr>
                        <td className={classes.commentDetail}>{item.comment_detail}</td>
                        <td>
                            <img className={classes.img} src={item.product_pic||pic1} alt="书本封面"/>
                            <div style={{display:'inline-block', verticalAlign:'top'}}>
                                <div style={{margin: '18px 0'}}>{item.product_name}</div>
                                <div style={{margin: '18px 0'}}>{item.product_describe}</div>
                            </div>
                        </td>
                        <td>{item.user_name}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export function CommentMessage(){
    const [state, setState] = useState([])
    const classes = useStyles();
    useEffect(()=>{
        Fetch('/comments/send?user_id=2018214877').then(
            res => {
                setState(res.data)
            }
        )
    },[])
    return(
        <div>
           <table className={classes.table}>
                <tr style={{fontWeight: '500'}}>
                    <td>评论内容</td>
                    <td style={{minWidth: '300px'}}>{`商品信息`}</td>
                    <td>商品所有人</td>
                </tr>
                {state.map((item, index) =>
                    <tr>
                        <td className={classes.commentDetail}>{item.comment_detail}</td>
                        <td>
                            <img className={classes.img} src={item.product_pic||pic1} alt="书本封面"/>
                            <div style={{display:'inline-block', verticalAlign:'top'}}>
                                <div style={{margin: '18px 0'}}>{item.product_name}</div>
                                <div style={{margin: '18px 0'}}>{item.product_describe}</div>
                            </div>
                        </td>
                        <td>{item.user_name}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}