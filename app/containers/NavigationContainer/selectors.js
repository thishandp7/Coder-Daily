import { createSelector } from 'reselect';
import selectLogInContainer from '../LogInContainer/selectors';
/**
 * Direct selector to the navigationContainer state domain
 */
const selectNavigationContainerDomain = () => state => state.get('navigationContainer');

/**
 * Other specific selectors
/**
 * Default selector used by NavigationContainer
 */

const selectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain(),
  selectLogInContainer(),
  (substate, loginSubstate) => Object.assign(substate.toJS(), { email: loginSubstate.email }),
);

export default selectNavigationContainer;
export {
  selectNavigationContainerDomain,
};
