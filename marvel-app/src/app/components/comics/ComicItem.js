import React from 'react';
import './ComicItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ComicItem = (props) => {

    const { id, title, image } = props.comic;

    return (
        <Link to={"/comics/" + id}>
            <li className="comics-li-item">
                <div>
                    <img src={image} alt={title} />
                </div>
                <p> {title} </p>
            </li>
        </Link>
    );
}
ComicItem.propTypes = {
    comic: PropTypes.object.isRequired
}


export default ComicItem;