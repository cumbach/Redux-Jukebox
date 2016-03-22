import { take, put, call, fork, select } from 'redux-saga/effects'
import { api } from '../services'
import * as actions from '../actions'

// each entity defines 3 creators { request, success, failure }
const { song } = actions

////////////////////////////////////////////////////
// SAGAS
//

export function* helloSaga() {
  console.log('Hello Sagas!');
}

/*
  resuable fetch saga
  entity :  user | repo | starred | stargazers
  apiFn  : api.fetchUser | api.fetchRepo | ...
  id     : login | fullName
  url    : next page url. If not provided will use pass it to apiFn
*/
function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id)
  if(response)
    yield put( entity.success(id, response) )
  else
    yield put( entity.failure(id, error) )
}

export const fetchSong = fetchEntity.bind(null, song, api.fetchSong)
