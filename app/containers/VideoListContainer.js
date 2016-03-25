import React from 'react'
import { connect } from 'react-redux'
import Track from '../components/Track'

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong
})

let VideoListContainer = ({selectedSong}) => {

  let trackExists = !!Object.keys(selectedSong).length

  const renderTrack = () => (
    <div className="video-list-container" >
      <h1>selected track videos from YouTube</h1>
      <VideoList track={selectedSong} />
    </div>
  )

  return trackExists ? renderTrack() : (<div></div>)

}

VideoListContainer = connect(mapStateToProps)(VideoListContainer)

export default VideoListContainer
