import React from 'react';
import './BookLoader.css';

const BookLoader = () => {

    return (
        <div className="wrapper book-load">
            <div className="loader book">
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
            </div>
            <h4>Reading</h4>
        </div>
    );
};

export default BookLoader;