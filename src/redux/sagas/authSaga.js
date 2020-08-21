import { call, put, takeLatest } from "redux-saga/effects";

import {
  POST_LOGIN,
  SET_ERROR_LOGIN,
  SET_LOADING_LOGIN,
  POST_REQUEST_LOGIN,
} from "../actions/actionTypes";

import { URL_LOGIN } from "../config/api";

import action from "../actions";

//middleware functions
function* postLogin({ payload }) {
  try {
    yield put({ type: SET_LOADING_LOGIN });
    const data = yield call(() => action(URL_LOGIN, 2, payload));
    data.status < 399
      ? yield put({ type: POST_LOGIN, payload: { data: data.data } })
      : yield put({ type: SET_ERROR_LOGIN, payload: { data: data.error } });
  } catch (error) {
    yield put({ type: SET_ERROR_LOGIN, payload: error });
  }
}

export default function* musicSaga() {
  // parameter pertama berisi type dispatch,
  // fungsi post menghindari looping request
  yield takeLatest(POST_REQUEST_LOGIN, postLogin);
}
