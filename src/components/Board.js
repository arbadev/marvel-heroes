import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import HeroeCard from './HeroeCard'
import 'whatwg-fetch'


const styles = {
  rootStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: '1vw'
  },
  gridListStyle: {
    width: '64vw',
    height: '265vh',
    overflowY: 'auto',
  },
  gridTileStyle: {
    width: '30vw',
    height: '50vh',
  }
}

const heroesData = {

}
const baseUrl = 'https://gateway.marvel.com:443/v1/public/'
const apiKey = '597631c3e5991c5a25a98c37c44b7285'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
  }

  componentWillMount() {
    const url = `${baseUrl}characters?limit=10&offset=70&apikey=${apiKey}`
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((characters) => {
      this.setState({
        characters: characters.data.results
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


    render() {
      return (
        <div style={styles.rootStyle}>
          <GridList
            cellHeight={180}
            style={styles.gridListStyle}
            >
            { this.state.characters.map(this.eachCard) }


          </GridList>
        </div>
      )
    }
  }

  export default Board
