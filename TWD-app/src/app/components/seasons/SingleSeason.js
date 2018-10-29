import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSingleSeason, handleErrors } from '../../action-creators/actions';
import Loader from '../../partials/Loader';

class SingleSeason extends Component {
    constructor(props) {
        super(props);

        this.mapCharacters = this.mapCharacters.bind(this);
        this.mapEpisodes = this.mapEpisodes.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSingleSeason(id);
    }

    mapCharacters(characters) {
        return characters.map((char, i) => <Link to={`/characters/${char.character}`} key={i}><li title={char.description}> {char.character} </li></Link>);
    }

    mapEpisodes(episodes) {
        return episodes.map((ep, i) => <Link to={`/episodes/${ep.ep}`} key={i}><li>Episode {ep.season_ep}: {ep.title}</li></Link>);
    }

    render() {
        const { error, season } = this.props;
        return (
            <div className="wrapper">
                {
                    error ? error
                        : !season ? <Loader />
                            : <div>
                                <h1>Season {season.num} </h1>
                                <div>
                                    <img src={season.photo} alt={season.num} />
                                </div>
                                <h3> Plot </h3>
                                <p> {season.description} </p>
                                <h3> Main Characters: </h3>
                                <ul>
                                    {this.mapCharacters(season.main_cast)}
                                </ul>
                                <h3> Supporting Characters: </h3>
                                <ul>
                                    {this.mapCharacters(season.supporting_cast)}
                                </ul>
                                <h3> Episodes: </h3>
                                <ul>
                                    {this.mapEpisodes(season.episodes)}
                                </ul>
                            </div>
                }
            </div>
        );
    }
}
SingleSeason.propTypes = {
    fetchSingleSeason: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    season: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        season: state.season,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSingleSeason, handleErrors })(SingleSeason);