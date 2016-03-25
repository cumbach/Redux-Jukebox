import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'


let TrackList = ({
  tracks,
  selectedSong,
  pageUp,
  pageDown,
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

    <div className="controls">
      <button onClick={pageUp} >
        Page Up
      </button>
      <button onClick={pageDown} >
        Page Down
      </button>
    </div>

  </div>
)

TrackList = connect()(TrackList)

export default TrackList
