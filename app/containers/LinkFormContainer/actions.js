/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK,
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILED,
  ADD_LINK_CANCELED,
} from './constants';

export function addLink(link) {
  return {
    type: ADD_LINK, link,
  };
}

export function addLinkCanceled() {
  return {
    type: ADD_LINK_CANCELED,
  };
}

export function addLinkSuccess(link) {
  return {
    type: ADD_LINK_SUCCESS, link,
  };
}

export function addLinkFailed(link, message) {
  return {
    type: ADD_LINK_FAILED, link, message,
  };
}
