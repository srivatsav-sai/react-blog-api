import "./PostDetail.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {

    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/api/posts/${id}`);
            setPost(res.data);
        };

        fetchPost();
    }, [id]);

    const deletePost = async () => {
        await axios.delete(`/api/posts/${id}`);
        navigate('/');
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button onClick={() => navigate(`/edit/${post._id}`)}>Edit</button>
            <button onClick={deletePost}>Delete</button>
        </div>
    );
};


export default PostDetail;
