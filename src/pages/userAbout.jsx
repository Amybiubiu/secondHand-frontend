import React,{useState, useEffect} from "react"
import FetchData from '../fetch.js'
import Fetch from '../service/fetch'

export function UserPublish(){
    const [state, setState] = useState([]);
    useEffect(()=>{
        Fetch('/user/publish?user_id=2018214870', {
            token: 'BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDE4MjE0ODcwLCJ1c2VyX25hbWUiOiLlpKfopb_nk5wiLCJ1c2VyX3Bhc3N3b3JkIjoiMTIzIiwidXNlcl90b2tlbiI6bnVsbCwiaWF0IjoxNjA4NDMzMDU4LCJleHAiOjE2MDg2OTIyNTh9.09CuQijk2Sis_qHTv_kQnWe_bt0nfcw0yZFofjN1PaQ' //从local提取
        }).then(
            res => {
                console.log(res.data)
                setState(res.data)
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