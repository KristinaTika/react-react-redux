import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEpisodes } from '../action-creators/actionCreators';
import EpisodeItem from '../components/EpisodeItem';
import './EpisodeList.css';
import PropTypes from 'prop-types';
import Loader from '../partials/Loader';

class EpisodeList extends Component {

    componentDidMount() {
        this.props.fetchEpisodes();
    }

    renderEpisodes(episodes) {
        return episodes.map(ep => <EpisodeItem key={ep.id} episode={ep} />);
    }

    render() {
        const { episodes, error } = this.props;
        return (
            <div id="wrapper">
                <p> {error} </p>
                <ul className="list-episodes">
                    {episodes.length === 0 ? <Loader /> : this.renderEpisodes(episodes)}
                </ul>
            </div>
        );
    }
}
EpisodeList.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    fetchEpisodes: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        error: state.error
    };
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodeList);