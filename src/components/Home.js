import React, { Component } from 'react'
import SearchBar from './SearchBar'
import HeroeCard from './HeroeCard'
import Board from './Board'
import ReactPaginate from 'react-paginate';
import '../styles/Home.scss'


class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Board/>
          <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         breakLabel={<a href="">...</a>}
                         breakClassName={"break-me"}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         clickCallback={this.handlePageClick}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />
      </div>
    )
  }
}

export default Home
