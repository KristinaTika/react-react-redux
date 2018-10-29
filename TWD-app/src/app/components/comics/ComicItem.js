import React from 'react';
import { Link } from 'react-router-dom';
import './ComicItem.css';
import PropTypes from 'prop-types';

const ComicItem = (props) => {

    const { title, volume, photo, } = props.comic;
    return (
        <Link to={`/comics/volumes/${title}`}>
            <li>
                <div>
                    <img src={photo} alt={title} />
                </div>
                <p>Volume {volume}: {title} </p>
            </li>
        </Link>
    );
};
ComicItem.propTypes = {
    comic: PropTypes.object.isRequired
}

export default ComicItem;