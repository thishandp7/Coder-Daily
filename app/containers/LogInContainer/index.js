/*
 *
 * LogInContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLogInContainer from './selectors';
import LogIn from '../../components/LogIn';
import { logIn } from './actions';

export class LogInContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LogIn {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLogInContainer();

function mapDispatchToProps(dispatch) {
  return {
    logIn: (email) => dispatch(logIn(email)),
    cancelLogIn: () => dispatch(logIn()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
