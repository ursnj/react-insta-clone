import React from 'react';
import {
    IoBookmarkOutline,
    IoChatbubbleOutline,
    IoEllipsisHorizontal,
    IoHeartCircle,
    IoHeartOutline,
    IoHome, IoPaperPlane, IoPaperPlaneOutline
} from "react-icons/io5";

const Post = () => {
    return (
        <div className='post'>
            <div className="post-header">
                <div className="post-header-left">
                    <img src="https://content.worklage.com/watchpartys-prod/users/NJ161397112674768133.jpg"/>
                    <p>Guest user</p>
                </div>
                <div className="post-header-right">
                    <IoEllipsisHorizontal size={20}/>
                </div>
            </div>
            <div className="post-image">
                <img src="https://content.worklage.com/watchpartys-prod/timeline/NJ161397112842017004.jpg"/>
            </div>
            <div className="post-actions">
                <div className="left">
                    <span>
                        <IoHeartOutline size={27}/>
                    </span>
                    <span>
                        <IoChatbubbleOutline size={25}/>
                    </span>
                    <span>
                        <IoPaperPlaneOutline size={27}/>
                    </span>
                </div>
                <div>
                    <span>
                        <IoBookmarkOutline size={27}/>
                    </span>
                </div>
            </div>
            <div className="post-content">
                <p className="strong">1045 Likes</p>
                <p><span className="strong">Guest user</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p className="light">10 HOURS AGO</p>
            </div>
        </div>
    );
};

export default Post;