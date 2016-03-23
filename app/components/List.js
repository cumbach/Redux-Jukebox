import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'


let List = ({
  tracks,
  selectedSong,
  dispatch
}) => (
  <div>
    <ul className="list" >
    {tracks.map((x, n) => (
      <li
        className={'list-track ' + (x === selectedSong ? 'active' : null )}
        onClick={() => dispatch(selectSong(x))}
        key={n} >
        <span className="title" >{x.name}</span>
        <span className="artist" >{ x.artist.name || x.artist }</span>

      </li>)
    )}
    </ul>

    <div>
      <button onClick={() => {
      }} >
        Page Up
      </button>
      <button onClick={() => {
      }} >
        Page Down
      </button>
    </div>

  </div>
)

List = connect()(List)

export default List
