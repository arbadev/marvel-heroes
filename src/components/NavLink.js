import React, { Component } from 'react'
import { Link } from 'react-router'
import '../styles/App.scss'


class NavLink extends Component {
  render() {
    return (
      <Link {...this.props} activeClassName="active"/>
    )
  }
}

export default NavLink
