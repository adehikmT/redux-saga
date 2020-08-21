import { call, put, takeEvery } from "redux-saga/effects";

import {
  SET_LOADING_MUSIC,
  GET_REQUEST_MUSIC,
  GET_MUSICS,
  SET_ERROR_MUSIC,
} from "../actions/actionTypes";

import { URL_MUSIC_ALL } from "../config/api";

import action from "../actions";

//middleware functions
function* getMusic() {
  try {
    yield put({ type: SET_LOADING_MUSIC });
    const data = yield call(() => action(URL_MUSIC_ALL, 1));
    yield put({ type: GET_MUSICS, payload: { data: data.data } });
  } catch (error) {
    yield put({ type: SET_ERROR_MUSIC, payload: error });
  }
}

export default function* musicSaga() {
  // parameter pertama berisi type dispatch,
  // fungsi get menghindari looping request
  yield takeEvery(GET_REQUEST_MUSIC, getMusic);
}
