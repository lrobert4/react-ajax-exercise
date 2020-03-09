import React, { Component } from 'react'

export default class Search extends Component {
    
    onInputChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder="search..." onChange='this.onInputChange' />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
