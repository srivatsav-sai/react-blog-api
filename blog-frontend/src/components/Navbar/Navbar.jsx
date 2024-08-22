import "./Navbar.css";
import { Link } from 'react-router-dom';
import React from "react";

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </nav>
);
};

export default Navbar;
