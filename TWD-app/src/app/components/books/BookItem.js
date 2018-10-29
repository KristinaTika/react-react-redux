import React from 'react';
import { Link } from 'react-router-dom';
import './BookItem.css';
import PropTypes from 'prop-types';

const BookItem = (props) => {
    const { name, photo, published, id } = props.book;
    return (
        <Link to={`/books/${id}`}>
            <li>
                <div>
                    <img src={photo} alt={name} />
                </div>
                <p> {name} ({published}) </p>
            </li>
        </Link>
    );
};
BookItem.propTypes = {
    book: PropTypes.object.isRequired
}

export default BookItem;