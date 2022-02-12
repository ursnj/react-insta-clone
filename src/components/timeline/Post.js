import React from 'react';
import {
    IoBookmarkOutline,
    IoChatbubbleOutline,
    IoEllipsisHorizontal,
    IoHeartCircle,
    IoHeartOutline,
    IoHome, IoPaperPlane, IoPaperPlaneOutline
} from "react-icons/io5";

const Post = (props) => {
    const {post} = props;

    return (
        <div className='post'>
            <div className="post-header">
                <div className="post-header-left">
                    <img src={`https://content.worklage.com/watchpartys-prod/users/${post.image}`}/>
                    <p>{post.name}</p>
                </div>
                <div className="post-header-right">
                    <IoEllipsisHorizontal size={20}/>
                </div>
            </div>
            <div className="post-image">
                <img src={`https://content.worklage.com/watchpartys-prod/timeline/${post.file}`}/>
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
                <p className="strong">{post.likes} Likes</p>
                <p><span className="strong">{post.name}</span>{post.title}</p>
                <p className="light">{post.created}</p>
            </div>
        </div>
    );
};

export default Post;