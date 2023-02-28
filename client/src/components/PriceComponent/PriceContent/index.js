import React, { useState, useEffect } from 'react';
import styles from './../PriceSection.module.scss';

const PriceContent = (props) => {
  const [width, setWith] = useState(window.innerWidth);
  const {
    priceContent: {
      title,
      subTitle,
      price: { currency, amount },
      optionsBefore,
      items,
      optionsAfter,
    },
    color,
    isOpen: { isOpen },
    handlerIsOpen,
  } = props;

  useEffect(() => {
    const handlerSize = () => {
      console.log(setWith(() => window.innerWidth));
    };
    window.removeEventListener('resize', handlerSize);
  });
  return (
    <li className={styles.qw} onClick={handlerIsOpen}>
      <div
        style={{ border: '5px transparent solid', borderColor: color.value }}
      >
        <h2>
          {title}
          {isOpen ? (
            <i className="fa fa-minus"></i>
          ) : (
            <i className="fa fa-plus"></i>
          )}
        </h2>

        <p>{subTitle && !isOpen}</p>
        <h3>
          {currency}
          {amount}
        </h3>
      </div>
      <ul>
        {isOpen &&
          optionsBefore.map((item, i) => (
            <li key={i} data-tooltip={item.tooltip}>
              {item.content}
            </li>
          ))}
      </ul>
      <ul>
        {isOpen &&
          items.map((item, i) => (
            <li key={i} data-tooltip={item.dataContent}>
              <i className="fa fa-check"></i>
              {item.item}
            </li>
          ))}
      </ul>
      <ul>
        {isOpen &&
          optionsAfter.map((item, i) => (
            <li key={i} data-tooltip={item.tooltip}>
              {item.content}
            </li>
          ))}
      </ul>
      <button style={{ backgroundColor: color.value }}>
        <i className="fa fa-check"></i>start
      </button>
    </li>
  );
};

export default PriceContent;
