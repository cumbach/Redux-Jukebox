import React from 'react'
import { connect } from 'react-redux'
import {search, fetchSongs} from '../actions'

let SearchBar = ({dispatch}) => {
  let input;

  return (
    <div>
      <hr/>
      
      <label>Artist Name: </label>
      <input ref={node => input = node} />
      <button onClick={() => {
        dispatch(search(input.value))
        input.value = ''
      }} >
        Search for song by artist
      </button>

      <hr/>
    </div>
  )
}
SearchBar = connect()(SearchBar)

export default SearchBar
