import React from 'react';
import CONSTANTS from './../../../constants.js';
import styles from './../HowWhySquadHelp.module.sass';
import data from './../data.json';

const Cards = (props) => {
  const mapCard = (article) => (
    <div className={styles.card}>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}${article.imgPath}`}
        alt={article.alt}
      />
      <h3>{article.subTitle}</h3>
      <p>{article.content}</p>
    </div>
  );
  return <>{data.articles.map(mapCard)}</>;
};

export default Cards;
