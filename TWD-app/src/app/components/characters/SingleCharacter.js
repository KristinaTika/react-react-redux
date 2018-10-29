import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCharacter, handleErrors } from '../../action-creators/actions';
import Loader from '../../partials/Loader';
import './SingleCharacter.css';
import PropTypes from 'prop-types';

class SingleCharacter extends Component {
    constructor(props) {
        super(props);

        this.mapItems = this.mapItems.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.mapPhotos = this.mapPhotos.bind(this);
    }

    componentDidMount() {
        const { name } = this.props.match.params;
        this.props.fetchSingleCharacter(name);
    }

    mapItems(items) {
        return items.map((item, i) => <li key={i}> {item} </li>);
    }

    mapPhotos(photos) {
        return photos.map((photo, i) => <img src={photo} alt={i} key={i} />)
    }

    checkStatus(status) {
        if (status.alive !== "") {
            return <span>
                {status.alive.status}
                <div className="bold-title">Lifespan: </div>{status.alive.lifespan}
            </span>;
        } else if (status.dead !== "") {
            return <span>
                {status.dead.status}
                <div>
                    <div>
                        <span className="bold-title">Death Episode: </span>
                        <span> {status.dead.death_episode} </span>
                    </div>
                    <div>
                        <span className="bold-title">Cause of Death: </span>
                        <span> {status.dead.cause_of_death} </span>
                    </div>
                    <p> Photos of character's death: </p>
                    <div>
                        {this.mapPhotos(status.dead.photo)}
                    </div>
                </div>
            </span>;
        } else {
            return 'Unknown';
        }
    }

    render() {
        const { character, error } = this.props;
        return (
            <div className="wrapper">
                {
                    error ? error
                        : !character ? <Loader />
                            : <div className="wrapper">
                                <h2 id="actor-status" className={character.status.alive !== "" ? 'green' : character.status.dead !== "" ? 'red' : 'blue'}> {character.name} </h2>
                                <div>
                                    <img src={character.photo} alt={character.name} />
                                </div>
                                <div>
                                    <span className="bold-title">Actor:  </span>
                                    <span>{character.actor}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Gender:   </span>
                                    <span>{character.gender}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Hair:  </span>
                                    <span>{character.hair}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Age:  </span>
                                    <span>{character.age}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Occupation:  </span>
                                    <span>{this.mapItems(character.occupation)}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Family:  </span>
                                    <span>{this.mapItems(character.family)}</span>
                                </div>
                                <div>
                                    <span className="bold-title">First Appearance:  </span>
                                    <span>{character.first_appearance}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Last Appearance:  </span>
                                    <span>{character.last_appearance}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Ethnicity  </span>
                                    <span>{character.ethnicity}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Status:  </span>
                                    <span>{this.checkStatus(character.status)}</span>
                                </div>
                            </div>
                }
            </div>
        );
    }
}
SingleCharacter.propTypes = {
    fetchSingleCharacter: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    character: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProp = (state) => {
    return {
        character: state.character,
        error: state.error
    }
}

export default connect(mapStateToProp, { fetchSingleCharacter, handleErrors })(SingleCharacter);