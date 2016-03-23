import merge from 'lodash/object/merge'


////////////////////////////////////////////////////
// REDUCERS
//


/*
  Handles service calls
  Updates entities with response
*/
export const entities = (state = { songs: [] }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, { songs: action.response.entities} )
  }

  return state
}
