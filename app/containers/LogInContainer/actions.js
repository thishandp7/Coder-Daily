/*
 *
 * LogInContainer actions
 *
 */

import {
  LOG_IN,
  CANCEL_LOGIN,
} from './constants';

export function logIn(email) {
  return {
    type: LOG_IN, email,
  };
}

export function cancelLogIn() {
  return {
    type: CANCEL_LOGIN,
  };
}
