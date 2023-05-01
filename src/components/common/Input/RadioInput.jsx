import React from 'react';
import styles from './RadioButton.module.scss';
const RadioInput = ({ display, active, value, changeHandler, groupName }) => {
  return (
    <div className={styles.radioButtonWrapper}>
      <input
        className={styles.radio}
        id={display}
        name={groupName}
        type="radio"
        defaultChecked={active}
        value={value}
        onClick={() => {
          changeHandler(value);
        }}
      />
      <label className={styles.radioLabel} htmlFor={display}>
        {display}
      </label>
    </div>
  );
};

export default RadioInput;
