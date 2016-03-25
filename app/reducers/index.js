
import {
  RESET_SCREEN,
  PAGE_UP,
  PAGE_DOWN,
  SELECT_SONG
} from '../actions'

////////////////////////////////////////////////////
// REDUCERS
//


/*
  Handles service calls
  Updates entities with response
*/
export const entities = (state = { songs: [], page: 1, part: 1 }, action) => {
  if (action.response && action.response.entities) {
    return { ...state, songs: action.response.entities }
  }

  switch (action.type) {
    case RESET_SCREEN:
      return { ...state, songs: [] }

    case PAGE_UP:
      if (state.part > 1) {
        return {...state, part: state.part - 1}
      }
      else if (state.page > 1) {
          return {...state, page: state.page - 1}
      }

    case PAGE_DOWN:
      let moreDataOnServer = state.songs.length === 50

      if (state.part < 5) {
        return {...state, part: state.part + 1}
      }
      else if (moreDataOnServer) {
          return {...state, part: 1, page: state.page + 1}
      }

  }

  return state
}

export const selectedSong = (state = {}, action) => {
  if (action.type === SELECT_SONG) {
    return (state === action.song) ? {} : action.song
  }

  if (action.type === RESET_SCREEN) {
    return {}
  }

  return state
}
