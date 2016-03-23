import React from 'react'
import { connect } from 'react-redux'
import { loadSongByArtist, loadSongByName } from '../actions'

let SearchBar = ({dispatch}) => {
  let input;

  return (
    <div>
      <hr/>

      <input ref={node => input = node} />
      <button onClick={() => input.value = ''} >
      Clear
      </button>
      <button onClick={() => dispatch(loadSongByArtist(input.value)) } >
        Search for song by artist name
      </button>
      <button onClick={() => dispatch(loadSongByName(input.value)) } >
        Search for song by name
      </button>

      <hr/>
    </div>
  )
}
SearchBar = connect()(SearchBar)

export default SearchBar
