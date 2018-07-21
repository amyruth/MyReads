import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route} from "react-router-dom"
import SearchPage from "./SearchPage"
import MyBooks from "./MyBooks";

class BooksApp extends Component {

    render() {
        return (
            <div>
                <Route exact path = "/" render = {() => (
                    <MyBooks/>
                )}
                />

                <Route exact path = "/Search" render = {() => (
                    <SearchPage/>
                )}

                />
            </div>
        )
    }
}

export default BooksApp
