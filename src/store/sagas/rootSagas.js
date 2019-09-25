import { all } from "redux-saga/effects";
import searchSaga from "./searchSaga";
import jobSaga from "./joblistSagas";

export default function* rootSaga() {
  yield all ([
    searchSaga(),
    jobSaga(),
  ])
}