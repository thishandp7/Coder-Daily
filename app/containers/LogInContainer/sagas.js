// import { take, call, put, select } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';
import { LOG_IN, CANCEL_LOGIN } from './constants';
// Individual exports for testing
function* handleDone() {
  yield put(goBack());
}

export function* doLogInSaga() {
  yield* takeLatest(LOG_IN, handleDone);
}

export function* doCancelSaga() {
  yield* takeLatest(CANCEL_LOGIN, handleDone);
}

// All sagas to be loaded
export default [
  doLogInSaga,
  doCancelSaga,
];
