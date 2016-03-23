import { searchbar } from './searchbar'
import merge from 'lodash/object/merge'


// Updates an entity cache in response to any action with response.entities.
function entities(state = { songs: [] }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, { songs: action.response.entities} )
  }

  return state
}


export {
  entities,
  searchbar
}
