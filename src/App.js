import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"

class BooksApp extends React.Component {

    render() {
        return (
            <div>
                <Route exact path = "/" render = {() => (
                    <div>
                        This is the main page!
                    </div>
                )}
                />

                <Route exact path = "/Search" render = {() => (
                    <div>
                        This is the search page!!
                    </div>
                )}

                />
            </div>
        )
    }
}

export default BooksApp
