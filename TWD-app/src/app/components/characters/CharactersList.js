import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, handleErrors } from '../../action-creators/actions';
import Character from './Character';
import './CharacterList.css';
import Loader from '../../partials/Loader';
import PropTypes from 'prop-types';
import SearchBar from '../../partials/SearchBar';

class CharactersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.mapCharacters = this.mapCharacters.bind(this);
    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        let searchedCharacters = this.props.characters.filter(char => char.name.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({
            searchedCharacters
        });
    }

    mapCharacters(characters) {
        if(characters.length === 0) {
            return <Loader />
        }
        return characters.map((character, i) => <Character key={i} character={character} />);
    }

    render() {
        const { characters, error } = this.props;
        const { searchedCharacters, searchValue } = this.state;
        return (
            <div className="wrapper">
                <SearchBar handleSearch={this.handleSearch} searchValue={searchValue} />
                <ul className="characters-list">
                {
                    error ? error : searchedCharacters ? this.mapCharacters(searchedCharacters) : this.mapCharacters(characters)
                }
                </ul>
            </div>
        );
    }
}
CharactersList.propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCharacters, handleErrors })(CharactersList);