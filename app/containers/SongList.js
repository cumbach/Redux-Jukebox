import { connect } from 'react-redux'
import React from 'react'
import List from '../components/List'

const mapStateToProps = (state) => ({
  songs : state.entities.songs
})

let SongList = ({songs}) => {
  return (
    <List items={songs} />
  )
}

SongList = connect(mapStateToProps)(SongList)

export default SongList
