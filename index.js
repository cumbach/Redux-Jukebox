import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './app/sagas'
import * as rootReducer from './app/reducers'
import App from './app/components/App'

const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(createSagaMiddleware(rootSaga))
)

store.subscribe(log)

function log() {
  console.log(store.getState())
}



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
