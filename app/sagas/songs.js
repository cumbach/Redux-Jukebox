import { fork, take } from 'redux-saga';
import { call, put } from 'redux-saga/effects'

function* loadSongs() {

    console.log(1)

    let api_url =
    `http://developer.echonest.com/api/v4/artist/songs?` +
    `api_key=DLDT9FRRYSZOYFV8C&name=eminem&format=json&start=0&results=50`

    yield put({ type: 'FETCHING_SONGS' });
    console.log(2)

    const songs = yield call(fetch, api_url);
    console.log(3)

    yield put({ type: 'FETCHED_SONGS', payload: songs });

}

export function* watchSongs() {
     while (yield take('FETCH_SONGS')) {
         yield fork(loadSongs);
     }
}


export function* helloSaga() {
  console.log('Hello Sagas!');
}
