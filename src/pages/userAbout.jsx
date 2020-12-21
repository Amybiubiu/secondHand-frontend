import React,{useState, useEffect} from "react"
import FetchData from '../fetch.js'

export function UserPublish(){
    const [state, setState] = useState([]);
    useEffect(()=>{
        FetchData({url:"/user/publish", method: "GET", query: {'user_id': '2018214877'}}).then(
            res => {
                console.log(res)
                setState(res)
            }
        )
    },[])
    return (
        <div>my publish</div>
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