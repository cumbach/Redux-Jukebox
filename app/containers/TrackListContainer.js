import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state) => ({
  songs : state.entities.songs,
  selectedSong: state.selectedSong
})

let TrackListContainer = ({songs, selectedSong}) => {

  const renderTrackList = (songs, selectedSong) => (
    <div className="track-list-container" >
      <h1>search results</h1>
      { songs.length ?
        <List tracks={songs} selectedSong={selectedSong} /> :
        null
      }
    </div>
  )

  return (
    <div>
       { songs.length ? renderTrackList(songs, selectedSong) : null }
    </div>
  )



}

TrackListContainer = connect(mapStateToProps)(TrackListContainer)

export default TrackListContainer
