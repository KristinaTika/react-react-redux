import React from 'react';
import './Partials.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h2> Blog App </h2>
            <nav>
                <Link to="/posts">Home </Link>
                <Link to="/posts/new">New Post </Link>
            </nav>
        </header>
    );
};

export default Header;