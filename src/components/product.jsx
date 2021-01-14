import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import defaultPic from "../img/default.png"

const useStyle = makeStyles((theme)=>({
    root: {
        border: `2px solid ${theme.palette.divider}`,
        borderRadius: '20px',
        display: 'flex'
    },
    img: {
        width: '100px',
        height: '100px',
        borderRadius: '20px'
    },
    text: {
        '& span':{
            marginRight: '18px'
        }
    },
    row: {
        margin: '20px 10px',
    }
}))

const Product = ({name, category, pic, prices, state, userName}) =>{
    const classes = useStyle();
    const Fit =() => userName? (<span>{`购买人： ${userName}`}</span>):(<span>状态：{state?"在售":"无货"}</span>)
    return(
        <div className={classes.root}>
            <img className={classes.img} src={pic||defaultPic} alt="书本封面"/>
            <div className={classes.text}>
                <div className={classes.row}>
                <span>{name+"  "}</span>
                <span>类别：{category||"二手书"} {" "}</span>
                </div>
                <div className={classes.row}>
                <span>价格：{prices}{" "}</span>
                <Fit />
                </div>
            </div>
        </div>
    )
}

export default Product