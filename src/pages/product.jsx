import React from "react"
import {useParams} from "react-router-dom"

export default function Product(){
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { productId } = useParams();
  
    return (
      <div>
        <h3>{productId}</h3>
      </div>
    );
}