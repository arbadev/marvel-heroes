import React, { Component } from 'react'
import NavLink from './components/NavLink'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import Home from './components/Home'



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>React Router Tutorial</h1>
          <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex={true} >Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>
          {/* Rendering from its parent App */}
          { this.props.children }

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
