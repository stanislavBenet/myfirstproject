import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../HbCollection.module.css';
import cx from 'classnames';

import data from './../data.json';
import CONSTANTS from '../../../constants.js';

const {
  IMAGES_PATH_HBCOLLECTION,
  HB_COLLECTION_NAME: { CATEGORIES, IDEAS, INDUSTRY },
} = CONSTANTS;
const { TopCategories, TopIdeas, TopIndustry } = data;

const HbContent = (props) => {
  const { isClick } = props;
  const acsess = isClick.map((item) => item.isChange);

  const mapContent = (elem) => {
    return (
      <div className={styles.collectionCol}>
        <Link to={elem.to} className={styles.item}>
          <a href={elem.to}>
            <div className={styles.imgContain}>
              <img
                src={`${IMAGES_PATH_HBCOLLECTION}${elem.imgPath}`}
                alt={elem.alt}
              ></img>
            </div>
            <p>
              {elem.content} <span></span>
            </p>
          </a>
        </Link>
      </div>
    );
  };

  const classNamesTopCategories = cx(styles.imgContains, styles.show);
  const classNamesTopIdeas = cx(styles.imgContains, styles.show);
  const classNamesTopIndustry = cx(styles.imgContains, styles.show);

  return (
    <>
      <div className={classNamesTopCategories}>
        {acsess[0] && TopCategories.map(mapContent)}
      </div>

      <div className={classNamesTopIndustry}>
        {acsess[1] && TopIndustry.map(mapContent)}
      </div>
      <div className={classNamesTopIdeas}>
        {acsess[2] && TopIdeas.map(mapContent)}
      </div>
    </>
  );
};

export default HbContent;
