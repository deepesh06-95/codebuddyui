import React from 'react';
import {FaSearch,FaMicrophone,FaInstagram} from 'react-icons/fa';
import './search.css';
export const Search=()=>{
    return (
        <>
        <div className='wrapper'>
            <div className='searchBar'>
                <input id="searchQueryInput" type="text" placeholder='Search'/>
                <button className='searchQuerySubmit a'><FaMicrophone/></button>
                <button className='searchQuerySubmit b'><FaInstagram/></button>
                <button className='searchQuerySubmit c'><FaSearch/></button>
            </div>

        </div>
        </>
    );
}