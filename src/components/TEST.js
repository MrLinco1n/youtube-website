import React from 'react';
import '../App.css';
import React, {useState, useEffect} from 'react'
import Item from "./Item"
import ReactDOM  from 'react-dom';


class StatTest extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      InCart: Item,
    };
    this.props = { counter: 0

    }
  }

    render()
  

}



function TEST(props) {
  const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
  return(
  /* 1  The onClick prop on the built-in DOM <button> component tells React to set up a click event listener.*/

<div>

 

  <div className="square">



    <button className="button" onClick={props.onClick}>
      {props.value}
    </button>
    </div>
    
  







        <div>

            <Item

                details={{Item_Id: "001", Item_name: "Green Maeng Da", Item_price: "27.75", Item_discount: "30%", Item_features: "Whites can be great for energy as well as anxiety relief, and focus.", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZVAyKOm56WtCIQSN0mLNYXN0ZjwKaxohmw&usqp=CAU"}}
                

            />

          

           <Item

                details={{Item_Id: "002", Item_name: "Red Bali", Item_price: "27.75", Item_discount: "20%", Item_features: "Reds are great for relaxing and reliving pain", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEr4Td0D5BAiWL7xNJKxzSLIFMf-XkqZGThg&usqp=CAU"}}

            />

           

            <Item

                details={{Item_Id: "003", Item_name: "White Thai", Item_price: "27.75", Item_discount: "15%", Item_features: "Whites can be great for energy as well as anxiety relief, and focus.", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLCFWn53pWx_6mA1HCVS4YNLIvFdpZgMMPQ&usqp=CAU"}}

            />

           

            <Item

                details={{Item_Id: "004", Item_name: "Bike D", Item_price: "66666", Item_discount: "12%", Item_features: "Whites can be great for energy as well as anxiety relief, and focus.", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56bLjqlm4Rcad5QzaIjIkyGYGWs0oGgs3ANiko3xGPx5tqPiT&s"}}

            />
             <Item

                details={{Item_Id: "005", Item_name: "Himalayan", Item_price: "555555", Item_discount: "5%", Item_features: "White color", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CByXQ7wqeh0OqKywsMRJVTFsi2BPyjd25aF0UI5ZdPwS6OE7WA&s"}}

            />
             <Item

                details={{Item_Id: "006", Item_name: "Pulsar", Item_price: "85000", Item_discount: "23%", Item_features: "Black, sporty", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebVXO_tWzevqdpEAAsJr9beoPLBJL1oywl2I6EbdETBHRyT4JMw&s"}}

            />
             <Item

                details={{Item_Id: "007", Item_name: "Bike E", Item_price: "253625", Item_discount: "5%", Item_features: "Red, good", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKF1prJDd3YFeJxPG2mV2G7TMSwOYjf67A_tpzZVDdcu5_TwzP&s"}}

            />
             <Item

                details={{Item_Id: "008", Item_name: "Bike F", Item_price: "256489", Item_discount: "65%", Item_features: "XYZ", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqr66uLQi_JstBVx229XOnW6C-yl9s5vSzTr02l95Yk6yJEhK5&s"}}

            />
             <Item

                details={{Item_Id: "009", Item_name: "bIKE G", Item_price: "6589632", Item_discount: "10%", Item_features: "XYZ", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87bmyk5fxgEQVrOr51VvRYzQ2heAZFSoXynfe4Su8i8AtVQOtpQ&s"}}

            />
             <Item

                details={{Item_Id: "0096", Item_name: "rAZOBACK", Item_price: "6556445", Item_discount: "7%", Item_features: "SOPRTS", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tu94GNyPZMYyGZu4hzBd8Y2HEU75VlzUKQzmn8SjaFpYxNtulA&s"}}

            />
             <Item

                details={{Item_Id: "00215", Item_name: "SPARROW", Item_price: "56332562", Item_discount: "", Item_features: "23%", Item_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBqq1_r8bongM3itkY-gREaEcwnfmFGlxJ8Ixa9SCRfQworPxuA&s"}}

            />

           

        </div>
</div>
    )

}

 

export default TEST;