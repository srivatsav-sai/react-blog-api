import "./PostForm.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostForm() {
  
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const res = await axios.get(`/api/posts/${id}`);
                setTitle(res.data.title);
                setContent(res.data.content);
            };

            fetchPost();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { title, content };

        if (id) {
            await axios.put(`/api/posts/${id}`, post);
        } else {
            await axios.post('/api/posts', post);
        }

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">{id ? 'Update' : 'Create'} Post</button>
        </form>
    );
};

export default PostForm;
