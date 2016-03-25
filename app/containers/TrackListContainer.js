import React from 'react'
import { connect } from 'react-redux'
import TrackList from '../components/TrackList'
import {pageUp, pageDown} from '../actions'


const mapStateToProps = (state) => ({
  songs : state.entities.songs,
  selectedSong: state.selectedSong
})

const mapDispatchToProps = (dispatch) => ({
  pageUp: dispatch(pageUp),
  pageDown: dispatch(pageDown)
})

let TrackListContainer = ({songs, selectedSong}) => {

  const renderTrackList = (songs, selectedSong) => (
    <div className="track-list-container" >
      <h1>search results</h1>
      { songs.length ?
        <TrackList tracks={songs} selectedSong={selectedSong} /> :
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

TrackListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackListContainer)

export default TrackListContainer
