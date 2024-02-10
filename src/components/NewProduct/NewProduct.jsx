import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewProduct.module.scss';
import Button from '../common/Button/Button.jsx';
import { BUTTON_TYPES } from '../../constants/buttonTypes.js';
import Picture from '../../assets/product-xx99-mark-two-headphones/desktop/Bitmap (1) (1).png';
const NewProduct = () => {
  return (
    <div className={styles.Info}>
      <div className={styles.wrapper}>
        {' '}
        <p className={styles.Info__overline}>NEW PRODUCT</p>
        <h1 className={styles.Info__product}>XX99 Mark II Headphones</h1>
        <p className={styles.Info__description}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link className={styles.Info__link}>
          <Button type={BUTTON_TYPES.PRIMARY} text={'SEE PRODUCT'} />
        </Link>
      </div>
      <img className={styles.Info__picture} src={Picture} alt="headphones" />
    </div>
  );
};

export default NewProduct;
