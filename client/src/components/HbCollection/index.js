import React from 'react';
import styles from './HbCollection.module.sass';

const HbCollection = () => {
  return (
    <>
      <section classNames={styles.block}>
        <div classNames={styles.container}>
          <div classNames={styles.title}>
            <h3>Largest Collection of Brandable Names</h3>
            <p>
              Explore themed brand name collections created by our experienced
              team of branding experts
            </p>
          </div>
          <div classNames={styles.span}>
            <span>Top Categories</span>
            <span>Top Indastry</span>
            <span>Top Ideas</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HbCollection;
