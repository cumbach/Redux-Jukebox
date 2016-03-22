export const search = (query) => ({
  type: 'SEARCH_BY_ARTIST',
  artistName: query
})

export const fetchSongs = () => ({
  type: 'FETCH_SONGS'
})

// export const fetchedSongs = (songs) => ({
//   type: 'FETCHED_SONGS',
//   payload: songs
// })
//
//
