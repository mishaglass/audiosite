import React, { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = ({ quantity }) => {
  let [count, setCount] = useState(1);

  const clickHandler = (operationType) => {
    if (operationType === 'plus' && count < quantity) {
      setCount(count + 1);
    }
    if (operationType === 'minus' && count - 1 > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counterWrapper}>
      <span className={styles.minus} onClick={() => clickHandler('minus')}>
        -
      </span>
      {count}
      <span className={styles.plus} onClick={() => clickHandler('plus')}>
        +
      </span>
    </div>
  );
};

export default Counter;
