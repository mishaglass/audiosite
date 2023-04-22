import React from 'react';
import styles from './Button.module.scss';
import shopButtonArrow from '../../../assets/icon/shopButtonArrow.svg';

const Button = ({ type, text }) => {
  return (
    <button className={`${styles.button} ${styles[type]}`}>
      <span>{text}</span>
      {(type === 'light' && (
        <img className={styles.shopButtonArrow} src={shopButtonArrow} alt="" />
      )) ||
        ''}
    </button>
  );
};

export default Button;
