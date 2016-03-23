import { connect } from 'react-redux'
import React from 'react'
import List from '../components/List'

const mapStateToProps = (state) => ({
  songs : state.entities.songs
})

let SongList = ({songs}) => {
  return (
    songs ? <List items={songs} /> : null
  )
}

SongList = connect(mapStateToProps)(SongList)

export default SongList
