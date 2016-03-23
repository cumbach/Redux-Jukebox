import 'isomorphic-fetch'


const API_KEY = 'DLDT9FRRYSZOYFV8C'
const API_ROOT = 'http://developer.echonest.com/api/v4/'
const SUFFIX = `?api_key=${API_KEY}&format=json&start=0&results=50&`

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, query) {

  const fullUrl = API_ROOT + endpoint + SUFFIX + query


  // return Promise.resolve(fullUrl)

  return fetch(fullUrl)
    .then(response => {
      return response.json().then(json => {
        // console.log(json.response.songs)
        return { json, response, entities : json.response.songs }
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

/*
example:
  export const fetchSongByArtist = artistName => callApi(<endpoint>, <query>)
  export const fetchSongByArtist = artistName => callApi('artist/songs', `name=${artistName}`)

    endpoint: 'artist/songs' -- attached after base url
    query: `name=${artistName}` -- attached to the url query section
*/
export const fetchSongByArtist = artistName => callApi('artist/songs', `name=${artistName}`)




// export const fetchUser = login => callApi(`users/${login}`, userSchema)
// export const fetchRepo = fullName => callApi(`repos/${fullName}`, repoSchema)
// export const fetchStarred = url => callApi(url, repoSchemaArray)
// export const fetchStargazers = url => callApi(url, userSchemaArray)
//
