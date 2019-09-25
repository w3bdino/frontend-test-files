import { takeLatest, call, put, fork, all } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* gameSaga() {
    yield takeLatest("SEARCH_JOB_REQUEST", searchJobRequest);
    yield takeLatest("PAGINATION_CHANGE_REQUEST", paginationRequest);
}

function* searchJobRequest(action){
    yield put({ type: "SEARCH_JOB", payload: action.payload });
    yield put({ type: "JOBLISTS_REQUEST", payload: action.payload });
}

function* paginationRequest(action){
    yield put({ type: "PAGINATION_CHANGE", payload: action.payload });
    yield put({ type: "JOBLISTS_REQUEST", payload: action.payload });
}
