import React from 'react';
import RadioInput from './RadioInput';

const RadioButtons = ({ options, clickHandler, groupName }) => {
  const renderRadioButtons = options.map(({ display, value, active }) => {
    return (
      <RadioInput
        groupName={groupName}
        display={display}
        value={value}
        active={active}
        changeHandler={clickHandler}
        key={value}
      />
    );
  });

  return <fieldset>{renderRadioButtons}</fieldset>;
};

export default RadioButtons;
