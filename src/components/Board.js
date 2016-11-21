import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import HeroeCard from './HeroeCard'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
}


class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroeCards: [
      ],
    }
  },

  eachNote(note) {
    return (
      <HeroeCard>

      </HeroeCard>
    )
  },

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
          >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default Board
