import React from 'react'
import { connect } from 'react-redux'
import VideoList from '../components/VideoList'
import { youtube } from '../services'

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong
})

let VideoListContainer = ({selectedSong}) => {

  let trackExists = !!Object.keys(selectedSong).length
  let videos = youtube.getVideos(selectedSong.name)

  const renderTrack = () => (
    <div className="video-list-container" >
      <h1>selected track videos from YouTube</h1>
      <VideoList videos={videos} />
    </div>
  )

  return trackExists ? renderTrack() : (<div></div>)

}

VideoListContainer = connect(mapStateToProps)(VideoListContainer)

export default VideoListContainer
