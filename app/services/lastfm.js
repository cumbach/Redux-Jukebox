import 'isomorphic-fetch'
import '../utils'

const API_KEY = '0ed2e239a694ee9e0b8b129c525b864c'
const API_ROOT = 'http://ws.audioscrobbler.com/2.0/'
const SUFFIX = `?api_key=${API_KEY}&format=json&limit=10&`

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(query, objectPath) {

  const fullUrl = API_ROOT + SUFFIX + query.replace(' ', '%20')

  return fetch(fullUrl)
    .then(response => {
      return response.json().then(json => {
        return { entities : Object.byString(json, objectPath) }
      })
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )

}

////////////////////////////////////////////////////
// api services
//
export const fetchSongByArtist = artistName =>
  callApi(`method=artist.gettoptracks&artist=${artistName}`, 'toptracks.track')

export const fetchSongByName = songName =>
  callApi(`method=track.search&track=${songName}`, 'results.trackmatches.track')
