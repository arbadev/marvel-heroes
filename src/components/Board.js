import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import HeroeCard from './HeroeCard'
import 'whatwg-fetch'
import ReactPaginate from 'react-paginate'
import {grey200, grey900} from 'material-ui/styles/colors'
import '../styles/Board.scss'



const styles = {
  rootStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: '1vw'
  },
  gridListStyle: {
    width: '64vw',
    height: '260vh',
    overflowY: 'auto',
  },
  gridTileStyle: {
    width: '30vw',
    height: '50vh',
  },
  paginateStyle : {
    width: '50%',
    margin: '0 auto',
    active: {
      backgroundColor: grey200
    }
  },
  containerStyle: {
    margin: '0 auto'
  }
}

const baseUrl = 'https://gateway.marvel.com:443/v1/public/'
const apiKey = '597631c3e5991c5a25a98c37c44b7285'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      offset: 0
    },
    this.handlePageClick = this.handlePageClick.bind(this)
  }



  componentWillMount() {
    this.loadServerCharacters()
  }

  loadServerCharacters() {
    const url = `${baseUrl}characters?limit=10&offset=${this.state.offset}&apikey=${apiKey}`
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((characters) => {
      this.setState({
        characters: characters.data.results,
        pageNum: Math.ceil(characters.data.total / 10)
      })
    })
  }

  eachCard(character) {
    return (
      <GridTile key={character.id} id={character.id} style={styles.gridTileStyle}>
        <HeroeCard
          superHeroName={character.name}
          avatar={character.thumbnail.path}
          description= {character.description}
          comics={character.comics}/>
      </GridTile>
    )
  }

  handlePageClick(data) {
    let selected = data.selected
    let offset = Math.ceil(selected * 10)
    this.setState({ offset }, () => {
      this.loadServerCharacters()
    })
  }

  render() {
    return (
      <div style={styles.rootStyle}>
        <GridList
          cellHeight={180}
          style={styles.gridListStyle}
          >
          { this.state.characters.map(this.eachCard) }

        </GridList>
        <div className='paginationContainer' style={styles.paginateStyle}>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={<a>...</a>}
            pageNum={this.state.pageNum}
            marginPagesDisplayed={0}
            pageRangeDisplayed={4}
            clickCallback={this.handlePageClick}
            breakClassName={"break-me"}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>
      </div>
    )
  }
}

export default Board
