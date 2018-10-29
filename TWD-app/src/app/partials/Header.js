import React from 'react';
import { Link } from 'react-router-dom';
import './Partials.css';

const Header = (props) => {
    return (
        <header>
            <h2> TWD App </h2>
            <nav>
                <Link to="/home"> Home </Link>
                <Link to="/books"> Books </Link>
                <Link to="/characters"> Characters </Link>
                <Link to="/comics"> Comics </Link>
                <Link to="/episodes"> Episodes </Link>
                <Link to="/seasons"> Seasons </Link>
            </nav>
        </header>
    );
};

export default Header;