export const food = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_BY_FOOD':
      return action.artistName
    default:
      return state
  }
}
