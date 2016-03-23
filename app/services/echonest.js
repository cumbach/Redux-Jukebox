import 'isomorphic-fetch'


const API_KEY = 'DLDT9FRRYSZOYFV8C'
const API_ROOT = 'http://developer.echonest.com/api/v4/'
const SUFFIX = `?api_key=${API_KEY}&format=json&start=0&results=50&`

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, query) {

  const fullUrl = API_ROOT + endpoint + SUFFIX + query

  return fetch(fullUrl)
    .then(response => {
      return response.json().then(json => {
        return { entities : json.response.songs }
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
export const fetchSongByArtist = artistName => callApi('song/search', `artist=${artistName}`)
export const fetchSongByName = songName => callApi('song/search', `title=${songName}`)
