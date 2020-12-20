import React from 'react'
import { makeStyle, makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme)=>{
    
})
const Product = ({name, category, pic, prices, state}) =>{
    const classes = useStyle();
    return(
        <div className={classes.root}>

        </div>
    )
}

export default Product