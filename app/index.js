import './main.css'
import 'babel-polyfill'
import './utils'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import * as rootReducer from './reducers'
import App from './components/App'

export const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(createSagaMiddleware(rootSaga))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
