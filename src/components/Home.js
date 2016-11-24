import React, { Component } from 'react'
import SearchBar from './SearchBar'
import HeroeCard from './HeroeCard'
import Board from './Board'
import ReactPaginate from 'react-paginate';
import '../styles/Home.scss'

const styles = {
  paginateStyle : {
    display: 'inlineBlock',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  containerStyle: {
    margin: 'o auto'
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Board/>
        <div style={styles.containerStyle}>
          <ReactPaginate previousLabel={"<"}
            nextLabel={">"}
            breakLabel={<a href="">...</a>}
            marginPagesDisplayed={0}
            pageRangeDisplayed={4}
            clickCallback={this.handlePageClick}
            breakClassName={"break-me"}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
        </div>
      </div>
    )
  }
}

export default Home
