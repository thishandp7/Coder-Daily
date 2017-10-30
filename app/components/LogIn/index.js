/**
*
* LogIn
*
*/

import React from 'react';

import styles from './styles.css';
import emailValidator from 'email-validator';
import TextInput from '../TextInput';

class LogIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    logIn: React.PropTypes.func.isRequired,
    cancelLogIn: React.PropTypes.func.isRequired,
  };

  state = {};

  logIn = () => {
    const email = this.emailField.value();
    if (!emailValidator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }
    this.setState({
      errorText: null,
    });
    this.props.logIn(email);
  }

  render() {
    return (
      <div className={styles.logIn}>
        <div
          className={styles.heading}
        >
        Log In with your email
        </div>

        <TextInput
          placeholder="email"
          ref={(f) => { this.emailField = f; }}
          errorText={this.state.errorText}
        />
        <div className={styles.actionContainer}>
          <div className={styles.button} onClick={this.props.cancelLogIn}>
            Cancel
          </div>
          <div className={styles.button} onClick={this.logIn}>
            Log In
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
