import React from 'react';
import Post from "./Post";
import Navbar from "../nav-bar/Navbar";

import './Timeline.css';

const Timeline = () => {
    return (
        <div className="timeline">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Timeline;