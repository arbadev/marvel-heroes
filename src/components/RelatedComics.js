import React, { Component } from 'react'

const styles = {
  wrapperStyle: {
    width:'100%'
  },
  blockStyle: {
    display: 'inline-block',
    width: '40%',
    marginLeft: '5%',
    fontSize:'80%',

    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  pStyle: {
    textAlign: 'center'
  }
}

class RelatedComics extends Component {

  eachComic(item) {
    return(
      <div key={item.name} style={styles.blockStyle}>{item.name}</div>
    )
  }

  comicsItems(items) {
    let i = 0
    let comics = []
    while ((i < 4) && (items.length > i)) {
      comics.push(items[i])
      i++
    }
    return comics
  }

  render() {
    const available = this.props.comics.available
    const comics = this.comicsItems(this.props.comics.items)
    if(available > 0) {
      return (
        <div style={styles.wrapperStyle}>
          {comics.map(this.eachComic)}
        </div>
      )
    } else {
      return <p style={styles.pStyle}>This character doesn't have any related comics...</p>
    }
  }
}

export default RelatedComics
