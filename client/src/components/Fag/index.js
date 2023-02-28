import React from 'react';
import styles from './Fag.module.css';
import data from './data.json';
import cx from 'classnames';

const { title } = data;


const Fag = () => {
  return (
    <section className={styles.faqBlock}>
      <div className={styles.container}>
        <div className={styles.faqInner}>
          <div className={styles.caption}>
            <h2>{title}</h2>
          </div>
          <article className={styles.faqItem}>
            <div className={styles.faqCaption}>
            {/*   мапим названия плюсика */}
            </div>
            <div className={styles.faqContent}>
              {/* Мапим лишки с контентом */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Fag;
