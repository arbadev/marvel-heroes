import React, { Component } from 'react'
import SearchBar from './SearchBar'
import HeroeCard from './HeroeCard'
import Board from './Board'

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Board/>
      </div>
    )
  }
}

export default Home
