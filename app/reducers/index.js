
import {
  RESET_SCREEN,
  SELECT_SONG
} from '../actions'

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

  if (action.type === RESET_SCREEN) {
    return { ...state, songs: [] }

  }

  return state
}

export const selectedSong = (state = {}, action) => {
  if (action.type === SELECT_SONG) {
    return (state === action.song) ? {} : action.song
  }

  return state
}
