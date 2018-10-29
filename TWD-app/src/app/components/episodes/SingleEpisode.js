import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleEpisode, handleErrors } from '../../action-creators/actions';
import Loader from '../../partials/Loader';
import PropTypes from 'prop-types';
import './SingleEpisode.css';

class SingleEpisode extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSingleEpisode(id);
    }

    render() {
        const { episode, error } = this.props;
        return (
            <div className="wrapper">
                {
                    error ? error
                        : !episode ? <Loader />
                            : <div>
                                <h1> {episode.title} </h1>
                                <p> Season {episode.season}, Episode {episode.season_ep} </p>
                                <div>
                                    <img src={episode.photo} alt={episode.title} />
                                </div>
                                <div>
                                    {episode.video ?
                                    <iframe width="560" height="315" src={episode.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={episode.title}>
                                    </iframe> : <Loader />
                                    }
                                </div>
                                <div>
                                    <span className="bold-title">Air Date:   </span>
                                    <span>{episode.air_date}</span>
                                </div>
                                <div>
                                    <span className="bold-title">Director:   </span>
                                    <span>{episode.director}</span>
                                </div>
                                <div>
                                    <span className="bold-title">US Viewers:   </span>
                                    <span>{ episode.us_viewers ? episode.us_viewers : 'No info available'}</span>
                                </div>
                                <div>
                                    <h3> Plot </h3>
                                    <p> {episode.plot ? episode.plot : 'No info available'} </p>
                                </div>
                            </div>
                }
            </div>
        );
    }
}
SingleEpisode.propTypes = {
    fetchSingleEpisode: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    episode: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        episode: state.episode,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSingleEpisode, handleErrors })(SingleEpisode);