import React, {useEffect, useState} from 'react';
import Post from "./Post";

import './Timeline.css';

const Timeline = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.watchpartys.com/users/posts/?userUuid=2c0f2e24-1dda-4c8c-933a-d825fa168fdc&page=1')
            .then((res) => res.json())
            .then((res) => setPosts(res));
    }, []);

    return (
        <div className="timeline">
            {posts.map((post) => <Post post={post} key={post.uuid}/>)}
        </div>
    );
};

export default Timeline;