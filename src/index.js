import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'

export default class index extends Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <Home />,
    document.querySelector('#root')
)