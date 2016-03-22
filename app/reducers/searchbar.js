const searchbar = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_BY_ARTIST':
      return action.artistName
    default:
      return state
  }
}

export default searchbar
