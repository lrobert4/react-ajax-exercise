import React, { Component } from 'react'
import Search from './Search.jsx'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="ui center aligned container ui header">TVMaze React</div>
                <Search />
            </div>
        )
    }
}
