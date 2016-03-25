import React from 'react'
import { connect } from 'react-redux'
import Track from '../components/Track'

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong
})

let TrackContainer = ({selectedSong}) => {

  let trackExists = !!Object.keys(selectedSong).length

  const renderTrack = () => (
    <div className="track-container" >
      <h1>selected track</h1>
      <Track track={selectedSong} />
    </div>
  )

  return (
    <div>
       { trackExists ? renderTrack() : null }
    </div>
  )
}

TrackContainer = connect(mapStateToProps)(TrackContainer)

export default TrackContainer
