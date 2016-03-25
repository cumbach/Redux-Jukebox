import React from 'react'
import Heading from './Heading'
import SearchBarContainer from '../containers/SearchBarContainer'
import TrackListContainer from '../containers/TrackListContainer'
import TrackContainer from '../containers/TrackContainer'
import VideoListContainer from '../containers/VideoListContainer'

const App = () => (
  <div>

    <Heading />
    <SearchBarContainer />
    <div>
      <TrackListContainer />
      <TrackContainer />
    </div>
    <VideoListContainer />


  </div>
)

export default App


/*




*/
