import React, { Component } from "react"
import { Link } from "react-router-dom"
import List from "./List"
import PropTypes from "prop-types";

class MyBooks extends  Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    };

    render () {

        const { books, moveBookToShelf} = this.props;

        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((books) => books.shelf === "currentlyReading").map((books) =>
                                        <List  key={books.id} books={books} moveBookToShelf={moveBookToShelf}>

                                        </List>
                                    )}
                                </ol>
                            </div>

                            <h2 className="bookshelf-title">Want To Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((books) => books.shelf === "wantToRead").map((books) =>
                                        <List  key={books.id} books={books} moveBookToShelf={moveBookToShelf}>

                                        </List>
                                    )}
                                </ol>
                            </div>

                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((books) => books.shelf === "read").map((books) =>
                                        <List  key={books.id} books={books} moveBookToShelf={moveBookToShelf}>

                                        </List>
                                    )}
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add books</Link>
                </div>
            </div>
        )
    }
}

export default MyBooks