import React, { Component } from 'react'

import SearchBar from './SearchBar'
import HeroeCard from './HeroeCard'


class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <HeroeCard/>
      </div>
    )
  }
}

export default Home
