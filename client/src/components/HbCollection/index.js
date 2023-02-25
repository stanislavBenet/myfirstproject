import React, { useState } from 'react';
import styles from './HbCollection.module.css';
import cx from 'classnames';
import HbContent from './HbContent';
import data from './data.json';

const { title, descriptionTitle } = data;

const HbCollection = () => {
  const [isClick, setIsClick] = useState([
    { name: 'Top Categories', isChange: true, id: 22 },
    { name: 'Top Industry', isChange: false, id: 11 },
    { name: 'Top Ideas', isChange: false, id: 23 },
  ]);

  const handlerClick = (i) => {
    const newIsClick = isClick.map((item) =>
      i === item.id ? { ...item, isChange: true } : { ...item, isChange: false }
    );
    setIsClick(newIsClick);
  };

  const mapSpan = (elem) => {
    const classNames = cx({ [styles.active]: elem.isChange === true });
    return (
      <span
        key={elem.id}
        onClick={() => handlerClick(elem.id)}
        className={classNames}
      >
        {elem.name}
      </span>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <p>{descriptionTitle}</p>
      </div>
      <div className={styles.spanContainer}>{isClick.map(mapSpan)}</div>
      <HbContent isClick={isClick} />
    </section>
  );
};

export default HbCollection;
