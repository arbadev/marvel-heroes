import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import Home from './components/Home'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()



ReactDOM.render((
  <Router history = { browserHistory }>
    <Route path="/" component = { App } >

      <IndexRoute component = { Home } />
      {/* make them children of `App` */}

      <Route path="/repos" component = { Repos }>
        <Route path="/repos/:userName/:repoName" component = { Repo } />
      </Route>

      <Route path="/about" component = { About } />

    </Route>
  </Router>
),
document.getElementById('app'))
