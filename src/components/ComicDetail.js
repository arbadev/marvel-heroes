import React, { Component } from 'react'



const baseUrl = 'https://gateway.marvel.com:443/v1/public/'
const apiKey = '597631c3e5991c5a25a98c37c44b7285'

class ComicDetail extends Component {

  componentWillMount() {
    this.loadComicFromServer()
  }

  loadComicFromServer() {
    const url = `${baseUrl}comics?title=${this.props.title}&apikey=${apiKey}`
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((comic) => {
      
    })
  }

  render() {
    return (
      <div>
        ComicDetail
      </div>
    )
  }
}

export default ComicDetail
