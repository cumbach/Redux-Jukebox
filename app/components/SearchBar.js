import React from 'react'
import {search, fetchSongs} from '../actions'

const SearchBar = ({searchbar, dispatch}) => {
  let input;

  return (
    <div>
      <input ref={node => input = node} />
      <button onClick={() => {
        dispatch(search(input.value))
        input.value = ''
      }} >
        Search by Artist
      </button><br/>
      Results: {searchbar}

      <hr/>
      <button onClick={() => {
        dispatch(fetchSongs())
      }} >
        Fetch Songs
      </button><br/>


    </div>
  )
}

export default SearchBar
