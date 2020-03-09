import React, { Component } from 'react'
import Search from './Search.jsx'
import axios from 'axios'

export default class Home extends Component {

    state = { shows: [] }
    onSearchSubmit = async (entry) => {
        const request = await axios.get(`http://api.tvmaze.com/search/shows?q=${entry}`)
        this.setState({shows:request.data })
    }

    render() {
        return (
            <div>
                <div className="ui center aligned container">
                    <h1>TVMaze React</h1>
                </div>
                <Search onSearchSubmit={this.onSearchSubmit} />
                We have { this.state.shows.length } shows.
            </div>
        )
    }
}
