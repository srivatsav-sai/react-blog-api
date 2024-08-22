import "./PostList.css";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/api/posts');
            setPosts(res.data);
        };

        fetchPosts();
    }, []);
    return (
      <div>
          <h1>Posts</h1>
          <ul>
              {posts.map(post => (
                  <li key={post._id}>
                      <Link to={`/posts/${post._id}`}>{post.title}</Link>
                  </li>
              ))}
          </ul>
      </div>
    );
};

export default PostList;
