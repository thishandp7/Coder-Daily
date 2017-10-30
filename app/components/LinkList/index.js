/**
*
* LinkList
*
*/
import React from 'react';
import styles from './styles.css';
import Link from '../Link';
import IconButton from '../IconButton';

function LinkList({ links, topicName, children, startAdd }) {
  const linkNodes = links.map(link => (
    <Link
      key={link.id}
      link={link}
    />
  ));

  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      <IconButton icon="plus" buttonClass={styles.button} iconClass={styles.icon} onClick={() => startAdd(topicName)} />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  startAdd: React.PropTypes.func.isRequired,
  children: React.PropTypes.element,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
  topicName: React.PropTypes.string.isRequired,
};

export default LinkList;
