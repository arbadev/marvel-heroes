import React, { Component } from 'react'
import '../styles/SearchBar.scss'

import AppBar from 'material-ui/AppBar'
import AutoComplete from 'material-ui/AutoComplete'
import FontIcon from 'material-ui/FontIcon'
import {grey50, grey900} from 'material-ui/styles/colors'
import characters from '../characters'


const styles = {
  iconStyles : {
    marginRight: 24,
    marginTop: 12,
    fontSize: '24px'
  },
  brandStyle : {
    height: 50,
    width: 100
  },
  autoCompleteStyle : {
    color: grey50,

  },
  appBarStyle: {
    backgroundColor: grey900
  },
  hintTextStyle: {
    color: grey50
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: characters,
      inputValue : ''
    },
    this.onUpdateInput = this.onUpdateInput.bind(this)
  }

  onUpdateInput(inputValue) {
    this.setState({
      inputValue: inputValue
    })
   }

  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={<img src="../public/Marvel_logo.png" style={styles.brandStyle}/> }
          style={styles.appBarStyle}
          >
          <div className="inner">
            <AutoComplete
              hintText="Search Character..."
              dataSource={this.state.dataSource}
              onUpdateInput={this.onUpdateInput}
              inputStyle={styles.autoCompleteStyle}
              />

          </div>
        </AppBar>
      </div>
    )
  }
}

export default SearchBar
