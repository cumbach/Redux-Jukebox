import { take, put, call, fork, select } from 'redux-saga/effects'
import { lastfm, youtube } from '../services'
import * as actions from '../actions'

// each entity defines 3 creators { request, success, failure }
const { songByArtist, songByName } = actions

////////////////////////////////////////////////////
// SAGAS
//

/*=====================================
  resuable fetch saga
  entity :  user | repo | starred | stargazers
  apiFn  : api.fetchUser | api.fetchRepo | ...
  id     : login | fullName
  url    : next page url. If not provided will use pass it to apiFn
*/
function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id)
  if(response) {
    yield put( entity.success(id, response) )

  } else {
    console.log('error')
    yield put( entity.failure(id, error) )
  }

}

/*=====================================
*/
export const fetchSongByArtist = fetchEntity.bind(null, songByArtist, lastfm.fetchSongByArtist)
export const fetchSongByName = fetchEntity.bind(null, songByName, lastfm.fetchSongByName)


/*=====================================
*/
function* watchLoadSongByArtist() {
  while(true) {
    const {artistName} = yield take(actions.LOAD_SONG_BY_ARTIST)
    yield fork(fetchSongByArtist, artistName)
  }
}

function* watchLoadSongByName() {
  while(true) {
    const {songName} = yield take(actions.LOAD_SONG_BY_NAME)
    yield fork(fetchSongByName, songName)
  }
}

/*=====================================
*/
export default function* root() {
  yield [
    fork(watchLoadSongByArtist),
    fork(watchLoadSongByName)
  ]
}
