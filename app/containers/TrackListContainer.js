import React from 'react'
import { connect } from 'react-redux'
import TrackList from '../components/TrackList'
import {pageUp, pageDown} from '../actions'


const getPart = (songs, part) => (
  songs.slice((part-1)*10, (part)*10)
)

const mapStateToProps = (state) => ({
  songs : getPart(state.entities.songs, state.entities.part),
  selectedSong: state.selectedSong
})

const mapDispatchToProps = (dispatch) => ({
  pageUp: () => dispatch(pageUp()),
  pageDown: () => dispatch(pageDown()),
  dispatch
})

let TrackListContainer = ({
  songs,
  selectedSong,
  pageUp,
  pageDown,
  dispatch
}) => {

  const renderTrackList = (songs, selectedSong, pageUp, pageDown) => (
    <div className="track-list-container" >
      <h1>search results</h1>
      { songs.length ?
        <TrackList
          tracks={songs}
          selectedSong={selectedSong}
          pageUp={pageUp}
          pageDown={pageDown}
          dispatch={dispatch}
          /> :
        null
      }
    </div>
  )

  return (
    <div>
       { songs.length ? renderTrackList(
           songs,
           selectedSong,
           pageUp,
           pageDown,
           dispatch
         ) : null }
    </div>
  )



}

TrackListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackListContainer)

export default TrackListContainer
