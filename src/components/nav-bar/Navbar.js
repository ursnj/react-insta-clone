import React from 'react';
import {
    IoAddCircleOutline,
    IoChatbubbleEllipsesOutline,
    IoCompassOutline,
    IoHeartOutline,
    IoHome, IoPersonCircleOutline, IoSearch
} from "react-icons/io5";
import logo from '../../assets/logo.png';


import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="container">
                <div className="nav-bar-container">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="search">
                        <span>
                            <IoSearch size={20} color="gray"/>
                        </span>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="menu">
                        <span>
                            <IoHome size={27} />
                        </span>
                        <span>
                            <IoChatbubbleEllipsesOutline size={27}/>
                        </span>
                        <span>
                            <IoAddCircleOutline size={27}/>
                        </span>
                        <span>
                            <IoCompassOutline size={27}/>
                        </span>
                        <span>
                            <IoHeartOutline size={27}/>
                        </span>
                        <span>
                            <IoPersonCircleOutline size={27}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;