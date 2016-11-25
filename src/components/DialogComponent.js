import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import XcomponentTemplate from './XcomponentTemplate'
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
    },
    this.handleClose = this.handleClose.bind(this)
  }

  focus() {
    ReactDOM.findDOMNode(this.refs.dialog)
  }

  handleClose() {
    this.props.onHandleClose()
  }

  getRadios() {
    return radios
  }


  render() {
    const actions = [
      <FlatButton
        label="View Comic"
        primary={true}
        onTouchTap={this.handleClose}
        labelColor={grey50}
        />,
    ]
    const radios = [];
    const comics = this.props.comics.items
    const available = this.props.comics.available
    for (let i = 0; i < comics.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`${comics[i].name}`}
          style={styles.radioButtonStyles}
          />
      )
    }

    if (available > 0) {
      return (
        <div>
          <Dialog
            title={`Comics - ${this.props.superHeroName}`}
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={this.handleClose}
            autoDetectWindowHeight={true}
            autoScrollBodyContent={true}
            >
            <RadioButtonGroup name="shipSpeed">
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
}

export default DialogComponent
