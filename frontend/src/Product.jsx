import React from 'react';
import Card from "./Card"

function Product(props){
    return (
        <div>
        <Card 
            key={props.id}
            img={props.img}
            detail={props.detail}
        />
        
        </div>
    )
    
}
export default Product;