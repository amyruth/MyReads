import React, { Component } from "react"
import { Link } from "react-router-dom"

class MyBooks extends  Component {
    render () {
        return (
            <div>
                This is the main page!
                <div className="open-search">
                    <Link to="/search">Add books</Link>
                </div>
            </div>
        )
    }
}


export default MyBooks