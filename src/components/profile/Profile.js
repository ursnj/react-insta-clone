import React, {useEffect, useState} from 'react';

import './Profile.css';
import Post from "../timeline/Post";

const Timeline = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.watchpartys.com/users/2c0f2e24-1dda-4c8c-933a-d825fa168fdc')
            .then((res) => res.json())
            .then((res) => setUser(res));

        fetch('https://api.watchpartys.com/users/posts/?userUuid=2c0f2e24-1dda-4c8c-933a-d825fa168fdc&page=1')
            .then((res) => res.json())
            .then((res) => setPosts(res));
    }, []);

    return (
        <div className="profile">
            <div className="container">
                <div className="user-block">
                <div className="user-img">
                    <img src={`https://content.worklage.com/watchpartys-prod/users/${user.image}`}/>
                </div>
                <div className="user-desc">
                    <h3>{user.name}</h3>
                    <p>@{user.username}</p>
                    <p>{user.followers} Followers &middot; {user.followings} Followings &middot; {user.posts} Posts</p>
                    <p>{user.about}</p>
                    <button>Follow</button>
                </div>
                </div>
                <div className="user-posts-block">
                    <div className="grid-container">
                    {posts.map((post) => {
                        return (
                                <div className="grid-item" key={post.uuid}>
                                    <Post post={post} key={post.uuid}/>
                                </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;