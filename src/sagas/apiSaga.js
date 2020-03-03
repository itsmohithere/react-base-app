import { put, takeEvery } from 'redux-saga/effects';

const delay = (ms)  =>  new Promise(res => setTimeout(res, ms));

export function* apiSaga( action ) {
  yield delay(1000)
  yield put({ type: 'changeName', payLoad: action.payLoad })
}

export function* watchAction() {
  yield takeEvery('PUSH_BUTTON', apiSaga)
}
