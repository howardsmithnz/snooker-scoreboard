import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App';

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
