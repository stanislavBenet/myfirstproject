import React from 'react';
import styles from './GreenContainer.module.sass';

const GreenContainer = (props) => {
  const { children } = props;
  return (
      <div className={styles.greyContainer}>{children}</div>
    
  );
};

export default GreenContainer;
