import { call, put, fork, take } from 'redux-saga';

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

export default function* watchSongs() {
     while (yield take('FETCH_SONGS')) {
         yield fork(loadSongs);
     }
}
