import './header.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
let Header = ()=>{
    return ( 
            <div className='Header_wrapper_main'>
            <div className='Header_Container'>
                <div className='header_logo'>
                    <img src='https://flone.jamstacktemplates.dev/assets/img/logo/logo.png'/>
                </div>
                <div className='Header_nav_items'>
                    <div>
                        <NavLink to="/"className={({isActive})=>isActive ? "active": ""}>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="/shop"className={({isActive})=>isActive ? "active": ""}>Shop</NavLink>
                    </div>
                    <div>
                    <NavLink  to="/contact"className={({isActive})=>isActive ? "active": ""}>Contact</NavLink>
                    </div>
                </div>
                <div className="personal_info">
                    <div className="profile">
                        <NavLink to ="/login"className={({isActive})=>isActive ? "active": ""}>profile</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}


let Footer =()=>{
    return(
        <div className='Footer_wrapper_main'>
            <div className="Footer_Container">
                <div className='Footer_sec_1'>
                    <img src='https://flone.jamstacktemplates.dev/assets/img/logo/logo.png'/>
                    <p>© 2023 Flone.</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className='Footer_sec_2'>
                    <h3>About Us</h3>
                    <div className="about_us_options">
                        <div>About Us</div>
                        <div>Store Location</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className='Footer_sec_3'>
                    <h3>FOLLOW US</h3>
                    <div className="Follow_us_options">
                        <div>Facebook</div>
                        <div>Instagram</div>
                        <div>X</div>
                    </div>
                </div>   
                <div className='Footer_sec_4'>
                    <h3>SUBSCRIBE</h3>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
export {Footer};