import React from 'react';
import styles from './Button.module.scss';
import shopButtonArrow from '../../../assets/icon/shopButtonArrow.svg';

const Button = ({ type, text, className }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${className}`}>
      {text}
      {type === 'light' ||
        (type === 'gray_light' && (
          <img
            className={styles.shopButtonArrow}
            src={shopButtonArrow}
            alt="shop button arrow"
          />
        )) ||
        ''}
    </button>
  );
};

export default Button;
