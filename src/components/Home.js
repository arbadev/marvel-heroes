import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'
import '../styles/Home.scss'
import {deepOrange500} from 'material-ui/styles/colors'


class Home extends Component {
  render() {
    return (
      <div>
        <RaisedButton label='Default' primary={true}/>
      </div>
    )
  }
}

export default Home
