import { spawn } from "redux-saga/effects";

import musicSaga from "./musicSaga.js";
import authSaga from "./authSaga.js";

export default function* rootSaga() {
  console.log("hallo saga");
  yield spawn(musicSaga);
  yield spawn(authSaga);
}
