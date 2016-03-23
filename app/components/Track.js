import React from 'react'
import { connect } from 'react-redux'
import { } from '../actions'

let Track = ({
  track,
  dispatch
}) => (
  <div className="track">
    <div className="track-graphic">
      <img className="track-image" src={track.image[3]['#text']} />
      <div className="track-banner">
        <div className="track-title" >{track.name}</div>
        <div className="track-artist" >{track.artist.name || track.artist}</div>
      </div>
    </div>

    <div>
      <button onClick={() => {
      }} >
        Add to Queue
      </button>
      <button onClick={() => {
      }} >
        Add to Playlist
      </button>
    </div>


  </div>
)

Track = connect()(Track)

export default Track



/*


*/
