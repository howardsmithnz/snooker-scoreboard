import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App';

import './index.css';

import { reducer } from './state/reducer.js'

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <App />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
