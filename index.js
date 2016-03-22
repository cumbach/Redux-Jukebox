import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import jukeboxApp from './app/reducers'
import App from './app/components/App'

let store = createStore(jukeboxApp, {searchbar: "hello"})

// console.log(store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
