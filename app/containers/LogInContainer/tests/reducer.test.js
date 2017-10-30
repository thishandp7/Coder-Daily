import expect from 'expect';
import logInContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('logInContainerReducer', () => {
  it('returns the initial state', () => {
    expect(logInContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
