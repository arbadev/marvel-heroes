import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import XcomponentTemplate from './XcomponentTemplate'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'


const styles = {
  radioButtonStyles: {
    marginTop: 16,
  },
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
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        />,
    ]
    let radios = [];
    let comics = this.props.comics
    for (let i = 0; i < comics.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`${this.props.comics[i].name}`}
          style={styles.radioButtonStyles}
          />
      )
    }

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
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    )
  }
}

export default DialogComponent
