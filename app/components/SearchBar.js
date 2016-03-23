import React from 'react'
import { connect } from 'react-redux'
import { loadSongByArtist } from '../actions'

let SearchBar = ({dispatch}) => {
  let input;

  return (
    <div>
      <hr/>

      <label>Artist Name: </label>
      <input ref={node => input = node} />
      <button onClick={() => dispatch(loadSongByArtist(input.value)) } >
        Search for song by artist
      </button>
      <button onClick={() => input.value = ''} >
        Clear
      </button>

      <hr/>
    </div>
  )
}
SearchBar = connect()(SearchBar)

export default SearchBar
