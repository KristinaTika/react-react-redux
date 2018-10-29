import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSeasons, handleErrors } from '../../action-creators/actions';
import PropTypes from 'prop-types';
import './SeasonsList.css';
import Loader from '../../partials/Loader';
import Season from './Season';
import SearchBar from '../../partials/SearchBar';


class SeasonsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.mapSeasons = this.mapSeasons.bind(this);
    }

    componentDidMount() {
        this.props.fetchSeasons();
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        let searchedSeasons = this.props.seasons.filter(char => {
            return char.num.slice(0, 1).toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({
            searchedSeasons
        })
    }

    mapSeasons(seasons) {
        if(seasons.length === 0) {
            return <Loader />
        }
        return seasons.map((s, i) => <Season key={i} season={s} />)
    }

    render() {
        const { seasons, error } = this.props;
        const { searchValue, searchedSeasons } = this.state; 
        return (
            <div className="wrapper">
                <SearchBar handleSearch={this.handleSearch} searchValue={searchValue}/>
                <ul>
                    {error ? error : searchedSeasons ? this.mapSeasons(searchedSeasons) : this.mapSeasons(seasons) }
                </ul>
            </div>
        );
    }
}
SeasonsList.propTypes = {
    fetchSeasons: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    seasons: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        seasons: state.seasons,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSeasons, handleErrors })(SeasonsList);