import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route} from "react-router-dom"
import SearchPage from "./SearchPage"
import MyBooks from "./MyBooks";

class BooksApp extends Component {

    state = {
        books: []
    };

    /* Fetching books from the api */

    componentDidMount() {
        this.getMyBooks();
    };

    getMyBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
            console.log("My Books are", this.state.books)
        });

    };

    /* Moving a book to a shelf */

    moveBookToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => this.getMyBooks());
            console.log(`Book ${book.title} has been moved to ${shelf} shelf`);
    };
    
    render() {

        return (
            <div>
                <Route exact path = "/" render = {() => (
                    <MyBooks books={this.state.books} moveBookToShelf={this.moveBookToShelf}/>
                )}
                />

                <Route exact path = "/Search" render = {() => (
                    <SearchPage books={this.state.books} moveBookToShelf={this.moveBookToShelf}/>
                )}
                />
            </div>
        )
    }
}

export default BooksApp
