import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleBook, handleErrors } from '../../action-creators/actions';
import './BooksList.css';
import BookLoader from '../../partials/BookLoader';
import PropTypes from 'prop-types';

class SingleBook extends Component {
    constructor(props) {
        super(props);

        this.mapItems = this.mapItems.bind(this);
        this.mapPlot = this.mapPlot.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSingleBook(id);
    }

    mapItems(items) {
        return items.map((item, i) => <li key={i}> {item} </li>);
    }

    mapPlot(plot) {
        return plot.map((p, i) =>
            <div key={i}>
                <h3> {p.name} </h3>
                <p> {p.summary} </p>
            </div>
        );
    }

    render() {
        const { book, error } = this.props;
        return (
            <div className="wrapper">
                {error ? error : !book ? <BookLoader /> :
                    <div>
                        <h1> {book.name} </h1>
                        <div>
                            <img src={book.photo} alt={book.name} />
                        </div>
                        <div>
                            <span className="bold-title">Authors: </span>
                            <span>{this.mapItems(book.author)}</span>
                        </div>
                        <div>
                            <span className="bold-title">Published: </span>
                            <span>{book.published}</span>
                        </div>
                        <div>
                            <span className="bold-title">Publisher: </span>
                            <span>{book.publisher}</span>
                        </div>
                        <div>
                            <span className="bold-title">Characters:</span>
                            <span>{this.mapItems(book.characters)} </span>
                        </div>
                        <h2> Summary: </h2>
                        <div> {this.mapPlot(book.plot)} </div>
                    </div>
                }
            </div>
        );
    }
}
SingleBook.propTypes = {
    fetchSingleBook: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    book: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        book: state.book,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSingleBook, handleErrors })(SingleBook);