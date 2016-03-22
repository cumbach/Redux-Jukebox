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

////////////////////////////////////////////////////
// Create structure of constant names
//
export const SONG_BY_ARTIST = createRequestTypes('SONG_BY_ARTIST')

////////////////////////////////////////////////////
// Create action creators for each constant
//
export const songByArtist = {
  request: name => action(SONG_BY_ARTIST.REQUEST, {name}),
  success: (name, response) => action(SONG_BY_ARTIST.SUCCESS, {name, response}),
  failure: (name, error) => action(SONG_BY_ARTIST.FAILURE, {name, error}),
}
