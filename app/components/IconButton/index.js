/**
*
* IconButton
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
import classNames from 'classnames';

function IconButton({ onClick, icon, iconClass, buttonClass }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className={classNames(styles.iconButton, buttonClass)} onClick={onClick} >
      <FontAwesome className={iconClass} name={icon} />
    </div>
  );
}

IconButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
};

export default IconButton;
