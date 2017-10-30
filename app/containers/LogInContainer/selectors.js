import { createSelector } from 'reselect';

/**
 * Direct selector to the logInContainer state domain
 */
const selectLogInContainerDomain = () => state => state.get('logInContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LogInContainer
 */

const selectLogInContainer = () => createSelector(
  selectLogInContainerDomain(),
  (substate) => (substate ? substate.toJS() : {})
);

export default selectLogInContainer;
export {
  selectLogInContainerDomain,
};
