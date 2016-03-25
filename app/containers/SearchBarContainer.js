import React from 'react'
import { connect } from 'react-redux'
import { resetScreen, loadSongByArtist, loadSongByName } from '../actions'

let SearchBarContainer = ({dispatch}) => {
  let input;

  return (
    <div>
      <hr/>

      <input ref={node => input = node} />
      <button onClick={() => {
        input.value = ''
        dispatch(resetScreen())
      }} >
        Reset
      </button>
      <button onClick={() => {
        input.value && dispatch(loadSongByArtist(input.value))
      }} >
        Search by Artist
      </button>
      <button onClick={() => {
        input.value && dispatch(loadSongByName(input.value))
      }} >
        Search by Song
      </button>

      <hr/>
    </div>
  )
}
SearchBarContainer = connect()(SearchBarContainer)

export default SearchBarContainer
