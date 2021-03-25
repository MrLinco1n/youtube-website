import React from "react"
import "../App.css";


const Item =(props)=>{

  return(
    <div className='grid-item'>
     <img src={props.details.Item_url}/>

      <h3>{props.details.Item_name}</h3>

      <p>Item_Id: {props.details.Item_Id}</p>

       <p>Item_price: {props.details.Item_price}</p>
       
       <p>Item_discount: {props.details.Item_discount}</p>

       <p>Item_features: {props.details.Item_features}</p>

       <input type = "button" onClick = "delete" value= "Add to Cart"/>

    </div>
  )

}

export default Item;