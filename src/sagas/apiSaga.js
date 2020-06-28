import { put, takeEvery, call } from 'redux-saga/effects';
import Axios from '../axiosConfig/apiService';

function* apiFetchPending(action, url) {
  yield put({ type: `${action}_PENDING`, actualAction: action, payLoad: url });
}

function* apiFetchSuccessful(action, data) {
  console.log({action, data})
  yield put({ type: `${action}_FULLFILLED`, actualAction: action, payLoad: data });
}

function* apiFetchRejected(action, error) {
  yield put({ type: `${action}_FAILED`, actualAction: action, payLoad: error })
}

export function* apiSaga( actionData ) {
  // yield delay(2000)

  const { url, action } = actionData.payLoad;

  try {
    yield* apiFetchPending(action, url);
  
    const apiCall = yield call(Axios.axiosGet, url);
    console.log({apiCall});
    yield* apiFetchSuccessful(action, apiCall);
    
  } catch (error) {
    console.log(error);
    yield* apiFetchRejected(action, error);
  }
  
}

export function* watchAction() {
  yield takeEvery('API_CALL', apiSaga)
}
