// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestLinkSuccess, requestLinkFailure } from './actions';
import { REQUEST_LINK, START_ADD } from './constants';
import { push } from 'react-router-redux';
// Individual exports for testing
console.info('URL: ', process.env.REACT_APP_API_URL);
function fetchLinkFromServer(topicName) {
  return fetch(`${process.env.REACT_APP_API_URL}/api/topics/${topicName}/links`)
        .then(responce => responce.json());
}

function* fetchLink(action) {
  try {
    const links = yield call(fetchLinkFromServer, action.topicName);
    yield put(requestLinkSuccess(links));
  } catch (err) {
    yield put(requestLinkFailure(err.message));
  }
}

export function* startAdd(action) {
  yield put(push(`/topics/${action.topicName}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

export function* fetchLinkSaga() {
  yield* takeLatest(REQUEST_LINK, fetchLink);
}

// All sagas to be loaded
export default [
  fetchLinkSaga,
  startAddSaga,
];
