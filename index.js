import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './app/components/App'
import { combineReducers } from 'redux'
import * as reducers from './app/reducers'

const jukeboxApp = combineReducers(reducers)

render(
  <Provider store={createStore(jukeboxApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
