import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Season = (props) => {

    const { num, photo } = props.season;
    const id = Number(num.slice(0, 1));

    return (
        <Link to={`/seasons/${id}`}>
            <li>
                <div>
                    <img src={photo} alt={`season ${id}`} />
                </div>
                <p>Season {num} </p>
            </li>
        </Link>
    );
};
Season.propTypes = {
    season: PropTypes.object.isRequired
}

export default Season;