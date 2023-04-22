import React from 'react';

const RadioInput = ({ display, active, value, changeHandler, groupName }) => {
  return (
    <div>
      <input
        id={display}
        name={groupName}
        type="radio"
        defaultChecked={active}
        value={value}
        onClick={() => {
          changeHandler(value);
        }}
      />
      <label htmlFor={display}>{display}</label>
    </div>
  );
};

export default RadioInput;
