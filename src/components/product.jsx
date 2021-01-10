import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import defaultPic from "../img/book1.JPG"

const useStyle = makeStyles((theme)=>({
    root: {
        border: `2px solid ${theme.palette.divider}`,
        borderRadius: '20px',
        display: 'inline-flex'
    },
    img: {
        width: '100px',
        height: '100px',
        borderRadius: '20px'
    },
    text: {

    },
    row: {
        margin: '20px 10px',
    }
}))

const Product = ({name, category, pic, prices, state}) =>{
    const classes = useStyle();
    return(
        <div className={classes.root}>
            <img className={classes.img} src={pic} alt="书本封面"/>
            <div className={classes.text}>
                <div className={classes.row}>
                <span>{name+"  "}</span>
                <span>类别：{category} {" "}</span>
                </div>
                <div className={classes.row}>
                <span>价格：{prices}{" "}</span>
                <span>状态：{state?"在售":"无货"}</span>
                </div>
            </div>
        </div>
    )
}

export default Product