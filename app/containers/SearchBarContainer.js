import React from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'



const mapStateToProps = (state) => {
  return {
    searchbar: state.searchbar
  }
}

const SearchBarContainer = connect(
  mapStateToProps,
  null
)(SearchBar)

export default SearchBarContainer
