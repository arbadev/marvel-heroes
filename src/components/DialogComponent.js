import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ComicDetail from './ComicDetail'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import {red500, grey50} from 'material-ui/styles/colors'

const styles = {
  radioButtonStyles: {
    marginTop: 16,
  }
};


class DialogComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      watchingComic: false,
      selectedComic: ''
    },
    this.handleClose = this.handleClose.bind(this)
    this.handleViewComic = this.handleViewComic.bind(this)
    this.handleSelectedComic = this.handleSelectedComic.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  focus() {
    ReactDOM.findDOMNode(this.refs.dialog)
  }

  _onChange(e, selected) {
    // let value = this._radio.getSelectedValue()
    this.setState({ selectedComic: selected })
  }

  handleClose() {
    this.props.onHandleClose()
    this.setState({
      watchingComic: false
    });
  }

  handleViewComic() {
    this.setState({watchingComic: true})

  }

  handleSelectedComic(selectedComic) {
    this.setState({selectedComic})
  }

  render() {
    const actionViewMore = [
      <FlatButton
        label="View Comic"
        primary={true}
        onTouchTap={this.handleViewComic}
        />,
    ]
    const available = this.props.comics.available

    const radios = this.props.comics.items.map((comics,index) => {
      return (
        <RadioButton
          key={index}
          value={`${comics.name}`}
          label={`${comics.name}`}
          style={styles.radioButtonStyles}
          />
      )
    })

    if (!this.state.watchingComic) {

      if (available > 0) {
        return (
          <div>
            <Dialog
              title={`Comics - ${this.props.superHeroName}`}
              actions={actionViewMore}
              modal={false}
              open={this.props.open}
              onRequestClose={this.handleClose}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              >
              <RadioButtonGroup
                ref={ (c) => this._radio = c }
                name='ComicRadioButtongroup'
                onChange={this._onChange}>
                {radios}
              </RadioButtonGroup>
            </Dialog>
          </div>
        )
      }
      else {
        return (
          <div>
            <Dialog
              title={`Comics - ${this.props.superHeroName}`}
              modal={false}
              open={this.props.open}
              onRequestClose={this.handleClose}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              >
              This character doesn't have any related comics...

            </Dialog>
          </div>
        )
      }
    }
    else {
      return (
        <div>
          <Dialog
            title={this.state.selectedComic}
            modal={false}
            open={this.props.open}
            onRequestClose={this.handleClose}
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}
            >
            <ComicDetail />

          </Dialog>
        </div>
      )
    }
  }
}

export default DialogComponent
