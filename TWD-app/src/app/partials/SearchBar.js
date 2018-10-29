import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div id="search-bar">
                <i className="fas fa-search"></i>
                <input type='text' value={props.searchValue} onChange={props.handleSearch} name='searchValue' />
        </div>
    );
};

export default SearchBar;