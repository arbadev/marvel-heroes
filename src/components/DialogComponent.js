import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

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


    return (
      <div>
        <Dialog
          ref="dialog"
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
          >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    )
  }
}

export default DialogComponent
