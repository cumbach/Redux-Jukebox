////////////////////////////////////////////////////
// REDUCERS
//


/*
  Handles service calls
  Updates entities with response
*/
export const entities = (state = { songs: [] }, action) => {
  if (action.response && action.response.entities) {
    return { ...state, songs: action.response.entities }
  }

  if (action.type === 'RESET_SCREEN') {
    return { ...state, songs: [] }

  }

  return state
}
