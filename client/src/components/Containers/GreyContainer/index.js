import React from 'react';
import styles from './GreyContainer.module.sass';

const GreyContainer = (props) => {
  const { children } = props;
  return <div className={styles.greyContainer}>{children}</div>;
};

export default GreyContainer;
