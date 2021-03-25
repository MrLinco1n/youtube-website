import React from "react"
import "../App.css";
import React, {useState, useEffect} from 'react'

function Item(props) {
  const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
  

  return(
    <div className='grid-item'>
     <img src={props.details.Item_url}/>

      <h3>{props.details.Item_name}</h3>

      <p>Item_Id: {props.details.Item_Id}</p>

       <p>Price: {props.details.Item_price}</p>
       
       <p>Bundle discount: {props.details.Item_discount}</p>

       <p>About: {props.details.Item_features}</p>

        <button className='button' onClick="delete">
        Quick view
        </button>

       <input type = "button" onClick ={handleClick} value= "Add to Cart"/>

    </div>
  )

}

export default Item;