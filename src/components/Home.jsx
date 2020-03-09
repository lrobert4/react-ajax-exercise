import React, { Component } from 'react'
import Search from './Search.jsx'
export default class Home extends Component {
    state = [
        {
          "name":"The Office",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg"
        },
        {
          "name":"Radiant Office",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/101/254702.jpg"
        },
        {
          "name":"The Office",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/93/234802.jpg"
        },
        {
          "name":"Mr. Box Office",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/97/244942.jpg"
        },
        {
          "name":"The Queen of Office",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/58/146476.jpg"
        },
        {
          "name":"No Offence",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/48/121682.jpg"
        },
        {
          "name":"Oficer",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73047.jpg"
        },
        {
          "name":"Trzeci oficer",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73053.jpg"
        },
        {
          "name":"Line Offline: Salaryman",
          "image":"http://static.tvmaze.com/uploads/images/medium_portrait/57/143508.jpg"
        },
        {
          "name":"Utenai Keikan","image":"http://static.tvmaze.com/uploads/images/medium_portrait/42/106093.jpg"
        }
      ]
      
    render() {
        return (
            <div>
                <div class="ui center aligned container ui header">TVMaze React</div>
                <Search />
            </div>
        )
    }
}
