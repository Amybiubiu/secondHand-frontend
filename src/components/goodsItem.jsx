import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
const useStyle = makeStyles((theme)=>{

})

const GoodsItem = (props) => {
    return (
    <div className="goods-item">
        <div className="goods-containner">
            <picture />
            <div className="goods-detail">
                name/description/time
                {props.name}
                {props.description}
                发布时间：{props.time}
            </div>
            <div className="goods-add">购物车图标</div>
        </div>
    </div>
    )
}

export default GoodsItem;


