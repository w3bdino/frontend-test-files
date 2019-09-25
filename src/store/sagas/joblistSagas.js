import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* jobSaga() {
    yield takeLatest("JOBLISTS_REQUEST", searchJobLists);  
}

function getJobListsAPI(searchdata) {
  console.log(searchdata);
    return axios.request({
      method: 'get',
      url: `https://search.bossjob.com/api/v1/search/job_filter?size=10&page=${searchdata.page}&query=${searchdata.search_keyword}`
    });
}  

function* searchJobLists(action){
    try {
      yield put({ type: "FETCH_JOBLISTS_REQUEST" });
      const response = yield call(getJobListsAPI, action.payload);
      yield put({ type: "FETCH_JOBLISTS_SUCCESS", payload: response.data.data });
    
    } catch (error) {
      yield put({ type: "FETCH_JOBLISTS_FAILED", payload: error.response });
    }
}
