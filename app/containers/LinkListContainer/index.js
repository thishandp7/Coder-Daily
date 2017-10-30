/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLink, startAdd } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.props.requestLink(this.props.topicName);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topicName !== this.props.topicName) {
      this.props.requestLink(newProps.topicName);
    }
  }

  render() {
    return (
      <div>
        <LinkList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLink: (topicName) => dispatch(requestLink(topicName)),
    startAdd: (topicName) => dispatch(startAdd(topicName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
