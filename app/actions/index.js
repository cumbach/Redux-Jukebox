const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`)
  return res;
}

function action(type, payload = {}) {
  return {type, ...payload}
}


export const LOAD_SONG_BY_ARTIST = 'LOAD_SONG_BY_ARTIST'
export const LOAD_SONG_BY_NAME = 'LOAD_SONG_BY_NAME'
export const RESET_SCREEN = 'RESET_SCREEN'

////////////////////////////////////////////////////
// Create structure of constant names
//
export const SONG_BY_ARTIST = createRequestTypes('SONG_BY_ARTIST')
export const SONG_BY_NAME = createRequestTypes('SONG_BY_NAME')

////////////////////////////////////////////////////
// Create action creators for each constant
//
export const songByArtist = {
  request: name => action(SONG_BY_ARTIST.REQUEST, {name}),
  success: (name, response) => action(SONG_BY_ARTIST.SUCCESS, {name, response}),
  failure: (name, error) => action(SONG_BY_ARTIST.FAILURE, {name, error}),
}

export const songByName = {
  request: name => action(SONG_BY_NAME.REQUEST, {name}),
  success: (name, response) => action(SONG_BY_NAME.SUCCESS, {name, response}),
  failure: (name, error) => action(SONG_BY_NAME.FAILURE, {name, error}),
}

export const resetScreen = () => action(RESET_SCREEN)
export const loadSongByArtist = (artistName) => action(LOAD_SONG_BY_ARTIST, {artistName})
export const loadSongByName = (songName) => action(LOAD_SONG_BY_NAME, {songName})
