import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics, handleErrors } from '../../action-creators/actions';
import ComicItem from './ComicItem';
import Loader from '../../partials/Loader';
import './ComicsList.css';
import PropTypes from 'prop-types';
import SearchBar from '../../partials/SearchBar';

class ComicsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.mapComics = this.mapComics.bind(this);
        this.mapVolumes = this.mapVolumes.bind(this);
        this.mapItems = this.mapItems.bind(this);
    }

    componentDidMount() {
        this.props.fetchComics();
    }

    mapItems(items) {
        return items.map((item, i) => <li key={i}>{item} </li>);
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        let searchedComics = this.props.comics.volumes.filter(char => char.title.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({
            searchedComics
        })
    }

    mapComics(comics) {
        if(comics.length === 0) {
            return <Loader />
        }
        return comics.volumes.map((c, i) => <ComicItem key={i} comic={c} />)
    }
    mapVolumes(comics) {
        if(comics.length === 0) {
            return <Loader />
        }
        return comics.map((c, i) => <ComicItem key={i} comic={c} />)
    }

    render() {
        const { comics, error } = this.props;
        const { searchedComics, searchValue } = this.state;
        return (
            <div className="wrapper">
            <SearchBar handleSearch={this.handleSearch} searchValue={searchValue} />
                {error ? error : !comics ? <Loader /> :
                    <div>
                        <p> {comics.info} </p>
                        <div>
                            <span className="bold-title">Publishers: </span>
                            <span>{this.mapItems(comics.publisher)}</span>
                        </div>
                        <ul>
                            {searchedComics ? this.mapVolumes(searchedComics) : this.mapComics(comics)}
                            {/* {this.mapComics(comics)} */}
                        </ul>
                    </div>
                }
            </div>
        );
    }
}
ComicsList.propTypes = {
    fetchComics: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    comics: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        comics: state.comics,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchComics, handleErrors })(ComicsList);