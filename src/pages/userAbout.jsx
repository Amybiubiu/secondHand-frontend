import React,{useState, useEffect} from "react"
import FetchData from '../fetch.js'
import Fetch from '../service/fetch'
import { makeStyles } from '@material-ui/core/styles'
import Product from '../components/product'
import pic1 from '../img/book1.JPG'
import pic2 from '../img/book2.JPG'
import pic3 from '../img/book3.JPG'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: '20px 80px'
    },
    item: {
        margin: '20px'
    }
}))
export function UserPublish(){
    const classes = useStyles();
    const obj1 = {
        name:"smashing webkit",
        category:"cs",
        pic: pic1,
        prices:"12.00r",
        state:"1"
    }
    const obj2 = {
        name:"社会学的邀请",
        category: '社会科学',
        pic: pic2,
        state:"1"
    }
    const [state, setState] = useState([obj1,obj2]);
    // useEffect(()=>{
    //     Fetch('/user/publish?user_id=2018214877').then(
    //         res => {
    //             console.log(res.data)
    //             setState(res.data)
    //         }
    //     )
    // },[])
    return (
        <div className={classes.root}>
            {state.map(item =>(
                <div className={classes.item}>
                    <Product name={item.name} 
                    category={item.category} 
                    pic={item.pic} 
                    prices={item.prices} 
                    state={item.state} />
                </div>
            ))}
        </div>
    )
}

export function UserBuy(){
    return(
        <div>my buy</div>
    )
}

export function UserSell(){
    return(
        <div>my sell</div>
    )
}