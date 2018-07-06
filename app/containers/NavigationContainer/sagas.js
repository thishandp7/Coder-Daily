// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCESS } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestTopicsSuccess, requestTopicsFailure } from './actions';
import { push } from 'react-router-redux';
import selectNavigationContainer from './selectors';
// Individual exports for testing
console.info('URL: ', process.env.REACT_APP_API_URL);
export function fetchTopicsFromServer() {
  return fetch(`${process.env.REACT_APP_API_URL}/api/topics`)
          .then(responce => responce.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSuccess(topics));
  } catch (err) {
    yield put(requestTopicsFailure(err));
  }
}

function* pushTopics(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedTopic && state.routerLocation === '/') {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCESS, selectDefaultTopic);
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopics);
}

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  selectDefaultTopicSaga,
];
