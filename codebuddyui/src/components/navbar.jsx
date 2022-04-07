import React from 'react';
import './navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdContact,IoMdSettings} from 'react-icons/io'
import {BsFillLockFill,BsFillFileEarmarkPersonFill} from 'react-icons/bs'
import {MdFeedback,MdPrivacyTip} from 'react-icons/md'
import {AiFillClockCircle,AiFillHome} from 'react-icons/ai';
export const Navbar=()=>{
 
    return (
        <>
        <div className='nav'>
            <img src='https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-700x394.png' alt="thumbnail" className='nav_img'/>
            <div className='nav1'>
                <div>Images</div>
                <div>Videos</div>
                <div>Translate</div>
                <div>...</div>
            </div>
            <div className='nav2'>
                <div>Signup</div>
                <div><IoMdContact className='contact'/></div>
                <div className='hamburger'><GiHamburgerMenu/>
                <ul className='listing'>
                    <li><IoMdSettings className='icons'/>Settings</li>
                    <li>Language</li>
                    <li>English</li>
                    <li>Country/Region</li>
                    <li>India</li>
                    <li>Location</li>
                    <li>Voice Search</li>
                    <li>More</li>
                    <li><BsFillLockFill className="icons"/>Safe Search</li>
                    <li><AiFillClockCircle className='icons'/>Search History</li>
                    <li><BsFillFileEarmarkPersonFill className="icons"/>My Bing</li>
                    <li><MdPrivacyTip className='icons'/>Privacy</li>
                    <li><MdFeedback className='icons'/>Feeback</li>
                    <li><AiFillHome className="icons"/>Customize your Homepage</li>
                    <li><input type="checkbox" placeholder='Show homepage result'/>Show menu bar</li>
                    <li><input type="checkbox" placeholder='Show homepage result'/>Show news and interest</li>
                    <li><input type="checkbox" placeholder='Show homepage result'/>Show homepage image</li>
                </ul></div>
            </div>
        </div>
        </>
    );
}