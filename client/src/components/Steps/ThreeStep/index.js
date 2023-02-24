import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './ThreeStep.module.sass';

const ThreeStep = () => {
  return (
    <section className={styles.stepReverse}>
      <article>
        <h3>Step 3: Rate Entries & Brainstorm with Creatives</h3>
        <p>
          <i className="fas fa-check" />
          <span>Provide instant feedback on Names</span>
        </p>
        <p>
          <i className="fas fa-check" />
          <span>Send private feedback or public messages to all creatives</span>
        </p>
        <p>
          <i className="fas fa-check" />
          <span>
            The more entries you rate - the submissions get better and better
          </span>
        </p>
      </article>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}gif/3-compressed.gif`}
        alt="compressed"
      />
    </section>
  );
};

export default ThreeStep;
