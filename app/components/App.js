import React from 'react'
import Heading from './Heading'
import SearchBarContainer from '../containers/SearchBarContainer'
import TrackListContainer from '../containers/TrackListContainer'
import TrackContainer from '../containers/TrackContainer'

const App = () => (
  <div>
    <Heading />
    <SearchBarContainer />
    <div>
      <TrackListContainer />
      <TrackContainer />
    </div>
  </div>
)

export default App


/*




*/
