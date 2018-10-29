import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Character.css';

const Character = (props) => {

    const { name, photo, status } = props.character;

    return (
        <div className={status.alive !== "" ? 'green character' : status.dead !== "" ? 'red character' : 'blue character'}>
            <Link to={`/characters/${name}`} >
                <li>
                    <div>
                        <img src={photo} alt={name} />
                    </div>
                    <p> {name} </p>
                </li>
            </Link>
        </div>
    );
};
Character.propTypes = {
    character: PropTypes.object.isRequired
}

export default Character;


