import React from 'react';
import './card.css';
export const Card=(props)=>{
    console.log(props)
    return (
        <div className='card'>
            <div>{props.dt.paper}</div>
            <div className='cardflex'>
                <img src={props.dt.url} alt='not available' className='imag'/>
                <div className='carddiv'>{props.dt.heading}</div>
            </div>
        </div>
    );
}