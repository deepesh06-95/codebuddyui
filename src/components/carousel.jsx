import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Card } from './card';
import './carousel.css'
export const CCarousel=()=>{
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:500,itemsToShow:2},
        {width:800,itemsToShow:3},
        {width:1200,itemsToShow:4},
    ];
    const details=[
        {"paper":"The Statesman",
    "heading":"India at par with world in disaster management: Amit Shah",
    "url":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVX6mW.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=550&y=223"},
    {"paper":"The Statesman",
    "heading":"India at par with world in disaster management: Amit Shah",
    "url":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVX6mW.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=550&y=223"},
    {"paper":"The Statesman",
    "heading":"India at par with world in disaster management: Amit Shah",
    "url":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVX6mW.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=550&y=223"},
    {"paper":"The Statesman",
    "heading":"India at par with world in disaster management: Amit Shah",
    "url":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVX6mW.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=550&y=223"},
    {"paper":"The Statesman",
    "heading":"India at par with world in disaster management: Amit Shah",
    "url":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVX6mW.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=550&y=223"},
    {"paper":"The Statesman",
    "heading":"India at par with world in disaster management: Amit Shah",
    "url":"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVX6mW.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=550&y=223"},
    
    ]
    return (
    <div className='carous'>
    <Carousel breakPoints={breakPoints}>
        {details.map((e,i)=>(
            <Card dt={e} key={i}/>
        ))}
     
    </Carousel>
    </div>
    )
}