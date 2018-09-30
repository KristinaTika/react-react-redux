import React from 'react';
import './SerieItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SerieItem = (props) => {

    const { id, title, image } = props.serie;

    return (
        <Link to={"/series/" + id}>
            <li className="series-li-item">
                <div>
                    <img src={image} alt={title} />
                </div>
                <p> {title} </p>
            </li>
        </Link>
    );
}
SerieItem.propTypes = {
    serie: PropTypes.object.isRequired
}

export default SerieItem;