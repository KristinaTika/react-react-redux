import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Episode.css';

const Episode = (props) => {

    const { ep, season, title, season_ep } = props.episode;
    return (
        <Link to={`/episodes/${ep}`}>
            <li className="bold-title"> { title} (s{season} ep{season_ep})</li>
        </Link>
    );
};
Episode.propTypes = {
    episode: PropTypes.object.isRequired
}

export default Episode;