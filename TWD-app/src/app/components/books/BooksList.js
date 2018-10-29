import React, { Component } from 'react';
import BookItem from './BookItem';
import { connect } from 'react-redux';
import { fetchBooks, handleErrors } from '../../action-creators/actions';
import './BooksList.css';
import BookLoader from '../../partials/BookLoader';
import PropTypes from 'prop-types';
import SearchBar from '../../partials/SearchBar';

class BooksList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.mapBooks = this.mapBooks.bind(this);
    }

    componentDidMount() {
        this.props.fetchBooks();
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        let searchedBooks = this.props.books.filter(char => char.name.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({
            searchedBooks
        })
    }

    mapBooks(books) {
        if (!books) {
            return <BookLoader />
        }
        if (books.length === 0) {
            return <BookLoader />
        }
        return books.map((book, i) => <BookItem key={i} book={book} />);
    }

    render() {
        const { books, error } = this.props;
        const { searchedBooks, searchValue } = this.state;
        return (
            <div className="wrapper books-container">
                <SearchBar handleSearch={this.handleSearch} searchValue={searchValue} />
                <ul>
                    {error ? error : searchedBooks ? this.mapBooks(searchedBooks) : this.mapBooks(books)} 
                </ul>
            </div >

        );
    }
}
BooksList.propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchBooks, handleErrors })(BooksList);