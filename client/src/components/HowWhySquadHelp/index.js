import React from 'react';
import styles from './HowWhySquadHelp.module.sass';
import data from './data.json';
import Cards from './Cards';

const HowWhySquadHelp = () => {
  const {
    mainTitle,
    articles: { imgPath, alt, subTitle, content },
  } = data;
  return (
    <>
      <div className={styles.container__description}>
        <h2 className={styles.blueUnderline}>{mainTitle}</h2>
        <div className={styles.cardContainer}>
          <Cards
            imgPath={imgPath}
            alt={alt}
            subTitle={subTitle}
            content={content}
          />
        </div>
      </div>
    </>
  );
};

export default HowWhySquadHelp;
