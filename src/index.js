import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Home from './components/Home'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()



ReactDOM.render((
  <Router history = { browserHistory }>
    <Route path="/" component = { App } >

      <IndexRoute component = { Home } />
      {/* make them children of `App` */}
    </Route>
  </Router>
),
document.getElementById('app'))
