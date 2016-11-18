import React, { Component } from 'react'
import '../styles/SearchBar.scss'

import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import AutoComplete from 'material-ui/AutoComplete'
import FontIcon from 'material-ui/FontIcon'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'


const iconStyles = {
  marginRight: 24,
  marginTop: 12,
  fontSize: '36px'
}
const brandStyle = {
  height: 50,
  width: 100
}
const searchStyle = {
  marginTop: 10,
  fontSize: '24px'
}

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: [],
    }
  }


  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={<img src="../public/Marvel_logo.png" style={brandStyle}/> }
          >
          <div className="inner">
            <AutoComplete
              hintText="Search Character..."
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              style={searchStyle}
              />

            <FontIcon className="material-icons" style={iconStyles}>search</FontIcon>
          </div>
        </AppBar>
      </div>
    )
  }
}

export default SearchBar
