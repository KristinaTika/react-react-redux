import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEpisodes, handleErrors } from '../../action-creators/actions';
import Loader from '../../partials/Loader';
import Episode from './Episode';
import PropTypes from 'prop-types';
import './EpisodesList.css';
import SearchBar from '../../partials/SearchBar';

class EpisodesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.mapEpisodes = this.mapEpisodes.bind(this);
    }

    componentDidMount() {
        this.props.fetchEpisodes();
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        let searchedEpisodes = this.props.episodes.filter(char => char.title.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({
            searchedEpisodes
        });
    }

    mapEpisodes(episodes) {
        if (!episodes) {
            return <Loader />
        }
        if (episodes.length === 0) {
            return <Loader />
        }
        return episodes.map((s, i) => <Episode key={i} episode={s} />)
    }

    render() {
        const { episodes, error } = this.props;
        const { searchValue, searchedEpisodes } = this.state;
        return (
            <div className="wrapper">
                <SearchBar searchValue={searchValue} handleSearch={this.handleSearch} />
                <ol>
                    {error ? error : searchedEpisodes ? this.mapEpisodes(searchedEpisodes) : this.mapEpisodes(episodes)}
                </ol>
            </div>
        );
    }
}
EpisodesList.propTypes = {
    fetchEpisodes: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    episodes: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchEpisodes, handleErrors })(EpisodesList);