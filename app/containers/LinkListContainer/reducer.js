/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINK_SUCCESS,
} from './constants';
import {
  ADD_LINK_SUCCESS,
} from '../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});

function addLink(state, action) {
  const links = state.get('links');
  links.push(action.link);
  return state.set('links', links);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINK_SUCCESS:
      return state.set('links', action.links);
    case ADD_LINK_SUCCESS:
      return addLink(state, action);
    default:
      return state;
  }
}

export default linkListContainerReducer;
