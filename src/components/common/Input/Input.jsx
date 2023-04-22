import { React, useRef } from 'react';
import { validations } from './inputValidation.js';
import styles from './Input.module.scss';

const Input = ({ label, placeholder }) => {
  const inputEl = useRef();
  const containerEl = useRef();
  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (
      !inputValue ||
      (validations.commonInput(inputValue) &&
        inputEl.current.classList.contains(`${styles.error}`))
    ) {
      containerEl.current.classList.remove(`${styles.error}`);
      inputEl.current.classList.remove(`${styles.error}`);
      return;
    }

    if (inputValue && !validations.commonInput(inputValue)) {
      containerEl.current.classList.add(`${styles.error}`);
      inputEl.current.classList.add(`${styles.error}`);
      return;
    }
  };

  return (
    <div className={styles.input_container} ref={containerEl}>
      <label className={styles.input_label} htmlFor={label}>
        {label}
      </label>
      <input
        className={styles.input_text}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        ref={inputEl}
      />
    </div>
  );
};

export default Input;
