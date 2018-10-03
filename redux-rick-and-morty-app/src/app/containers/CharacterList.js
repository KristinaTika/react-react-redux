import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../action-creators/actionCreators';
import CharacterItem from '../components/CharacterItem';
import './CharacterList.css';
import PropTypes from 'prop-types';
import Loader from '../partials/Loader';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.renderCharacters = this.renderCharacters.bind(this);
    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    renderCharacters(characters) {
        return characters.map(val => <CharacterItem key={val.id} character={val} />);
    }

    render() {
        const { characters, error } = this.props;
        return (
            <div id="wrapper">
                <p> {error} </p>
                <ul className="list-characters">
                    {characters.length === 0 ? <Loader /> : this.renderCharacters(characters)}
                </ul>
            </div>
        );
    }
}
CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchCharacters: PropTypes.func.isRequired,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        error: state.error
    };
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);