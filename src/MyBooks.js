import React, { Component } from "react"
import { Link } from "react-router-dom"

class MyBooks extends  Component {
    render () {
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="open-search">
                    <Link to="/search">Add books</Link>
                </div>
            </div>
        )
    }
}


export default MyBooks