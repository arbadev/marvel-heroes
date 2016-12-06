import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'




const apiKey = '597631c3e5991c5a25a98c37c44b7285'

class ComicDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      title: '',
      image: ''
    },
    this.handleClose = this.handleClose.bind(this)
    
  }

  componentWillMount() {
    this.loadComicFromServer()
  }

  loadComicFromServer() {
    const uri = `${this.props.resourceURI}?apikey=${apiKey}`
    fetch(uri)
    .then((response) => {
      return response.json()
    })
    .then((comic) => {
      this.setState({
        description: comic.data.results[0].description,
        title: comic.data.results[0].title,
        image: comic.data.results[0].images[0].path
      })
      console.log('description', this.state.description)
      console.log('title', this.state.title)
      console.log('image', this.state.image)
      console.log('COMIC', comic.data.results);
    })
  }
  handleClose() {
    this.props.onHandleClose()
  }

  render() {
    return (
      <div>
        <Dialog
          title={this.state.title}
          modal={false}
          open={true}
          onRequestClose={this.handleClose}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
          >
          {this.state.description}
        </Dialog>
      </div>
    )
  }
}

export default ComicDetail
