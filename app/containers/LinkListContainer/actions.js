/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_SUCCESS,
  REQUEST_LINK_FAILURE,
  REQUEST_LINK,
  START_ADD,
} from './constants';

export function startAdd(topicName) {
  return {
    type: START_ADD, topicName,
  };
}

export function requestLinkSuccess(links) {
  return {
    type: REQUEST_LINK_SUCCESS, links,
  };
}

export function requestLinkFailure(message) {
  return {
    type: REQUEST_LINK_FAILURE, message,
  };
}

export function requestLink(topicName) {
  return {
    type: REQUEST_LINK, topicName,
  };
}
