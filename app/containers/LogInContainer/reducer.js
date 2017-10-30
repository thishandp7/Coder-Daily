/*
 *
 * LogInContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOG_IN,
} from './constants';

const initialState = fromJS({});

function logInContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default logInContainerReducer;
