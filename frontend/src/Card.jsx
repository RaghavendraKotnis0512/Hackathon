import React from 'react';
import info from './info';
import "./Card.css"

function Card(props){
    return (
        <div className='card'>
            <span>{props.img}</span>
            <p>{props.details}</p>
        </div>
    )
}
export default Card;