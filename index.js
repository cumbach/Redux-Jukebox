import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './app/components/App'
import { combineReducers } from 'redux'
import * as reducers from './app/reducers'
import sagaMiddleware from 'redux-saga';

const jukeboxApp = combineReducers(reducers)

import watchSongs from './app/sagas/songs'

const createStoreWithSaga = applyMiddleware(
  sagaMiddleware([watchSongs])
)(createStore);

let store = createStoreWithSaga(jukeboxApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
