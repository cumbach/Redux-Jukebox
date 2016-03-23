import React from 'react'
import Heading from './Heading'
import SearchBar from './SearchBar'
import TrackListContainer from '../containers/TrackListContainer'
import TrackContainer from '../containers/TrackContainer'

const App = () => (
  <div>
    <Heading />
    <SearchBar />
    <div>
      <TrackListContainer />
      <TrackContainer />
    </div>
  </div>
)

export default App
