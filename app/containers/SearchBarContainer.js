import React from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'



const mapStateToProps = (state) => {
  return {
    searchbar: state.searchbar
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: (query) => {
//       dispatch(search(query))
//     }
//   }
// }


const SearchBarContainer = connect(
  mapStateToProps,
  null
)(SearchBar)




export default SearchBarContainer
