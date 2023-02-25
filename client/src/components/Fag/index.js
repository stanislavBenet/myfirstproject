import React from 'react';
import styles from './Fag.module.css';
import data from './data.json';

const { title } = data;

const Fag = () => {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

export default Fag;
