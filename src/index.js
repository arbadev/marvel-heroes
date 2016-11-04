import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './components/About'
import Repos from './components/Repos'
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
),
document.getElementById('app'))
