import React, { Component } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import List from "./List";
import { PropTypes } from "prop-types"

class SearchPage extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    };

    state = {
        query: [],
        fetchedBooks: []
    };

    fetchBooks = (event) => {
        const query = event.target.value.trim();
        this.setState({ query });

        if (query) {
            BooksAPI.search(query).then((books) => {
                (books instanceof Array) ? this.setState({fetchedBooks: books}) : this.setState({fetchedBooks: []})
            });
            console.log("Query: ", query);
            console.log("Books fetched", this.state.fetchedBooks);
        }
    };

    render () {

        const { moveBookToShelf } = this.props;

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Home</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={this.fetchBooks}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.fetchedBooks.map(book => (
                                <List key = {book.id} books={book} moveBookToShelf={moveBookToShelf}/>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage