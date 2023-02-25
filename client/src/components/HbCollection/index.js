import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HbCollection.module.css';
import cx from 'classnames';
import data from './data.json';
import CONSTANTS from '../../constants';

const { TopCategories, TopIdeas, TopIndustry } = data;

const HbCollection = () => {
  const [isClick, setIsClick] = useState([
    { name: 'Top Categories', isChange: false, id: 22 },
    { name: 'Top Industry', isChange: false, id: 11 },
    { name: 'Top Ideas', isChange: false, id: 23 },
  ]);
  const classNames = cx(styles.imgContains, styles.none);
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
  const mapContent = (elem) => {
    return (
      <div className={styles.collectionCol}>
        <Link className={styles.item}>
          <div className={styles.imgContain}>
            <img
              src={`${CONSTANTS.IMAGES_PATH_HBCOLLECTION}${elem.imgPath}`}
              alt={elem.alt}
            ></img>
          </div>
          <p>
            {elem.content} <span></span>
          </p>
        </Link>
      </div>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Largest Collection of Brandable Names</h3>
        <p>
          Explore themed brand name collections created by our experienced team
          of branding experts
        </p>
      </div>
      <div className={styles.spanContainer}>{isClick.map(mapSpan)}</div>
      <div id="Top Categories" className={classNames}>{TopCategories.map(mapContent)}</div>
      <div id="Top Industry" className={classNames}>{TopIndustry.map(mapContent)}</div>
      <div id="Top Ideas" className={classNames}>{TopIdeas.map(mapContent)}</div>
    </section>
  );
};

export default HbCollection;
