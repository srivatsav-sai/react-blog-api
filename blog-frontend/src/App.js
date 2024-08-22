import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbars from './components/Navbar/Navbar';
import PostLists from './components/PostList/PostList';
import PostDetails from './components/PostDetail/PostDetail';
import PostForms from './components/PostForm/PostForm';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
    return (
        <Router>
            <Navbars />
            <Routes>
                <Route path="/" element={<PostLists />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/create" element={<PostForms />} />
                <Route path="/edit/:id" element={<PostForms />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};


export default App;
