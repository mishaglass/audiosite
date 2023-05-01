import './scss/app.scss';
import { BUTTON_TYPES, INPUT_TYPES } from './constants';

import React from 'react';

import Button from './components/common/Button/Button.jsx';
import Input from './components/common/Input/Input';
import RadioButtons from './components/common/Input/RadioButtons';
import Counter from './components/common/Counter/Counter';

function App() {
  const [options, setOptions] = React.useState([
    { display: 'e-Money', value: 'e-money', active: false },
    { display: 'Cash on Delivery', value: 'cash', active: false },
  ]);

  // const findOptionByValue = (value) => {
  //   return options.find((option) => option.value === value);
  // }

  const handleRadioButtonClick = (value) => {
    setOptions(
      options.map((option) => {
        if (option.value === value) {
          return {
            ...option,
            active: true,
          };
        }
        return {
          ...option,
          active: false,
        };
      })
    );
  };

  return (
    <div className="App">
      <Button type={BUTTON_TYPES.PRIMARY} text="SEE PRODUCT"></Button>
      <Button type={BUTTON_TYPES.SECONDARY} text="SEE PRODUCT"></Button>
      <Button type={BUTTON_TYPES.LIGHT} text="SHOP"></Button>
      <h1>YO CHECK THIS BASS OUT</h1>
      <h2>YO CHECK THIS BASS OUT</h2>
      <h3>YO CHECK THIS BASS OUT</h3>
      <h4>YO CHECK THIS BASS OUT</h4>
      <h5>YO CHECK THIS BASS OUT</h5>
      <h6>YO CHECK THIS BASS OUT</h6>
      <p className="overline">YO CHECK THIS BASS OUT</p>
      <p className="sub_title">YO CHECK THIS BASS OUT</p>
      <Input type={INPUT_TYPES.TEXT} placeholder="Your Name" label="Name" />
      <RadioButtons
        groupName="payments"
        options={options}
        clickHandler={handleRadioButtonClick}
      />
      <Counter quantity={6} />
    </div>
  );
}

export default App;
