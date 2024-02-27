import './scss/app.scss';
import { BUTTON_TYPES, INPUT_TYPES } from './constants';

import React from 'react';

import Button from './components/common/Button/Button.jsx';
import Input from './components/common/Input/Input';
import RadioButtons from './components/common/Input/RadioButtons';
import Counter from './components/common/Counter/Counter';
import Header from './components/Header/Header.jsx';
import NewProduct from './components/NewProduct/NewProduct.jsx';
import LinkBar from './components/LinkBar/LinkBar.jsx';
function App() {
  // const [options, setOptions] = React.useState([
  //   { display: 'e-Money', value: 'e-money', active: false },
  //   { display: 'Cash on Delivery', value: 'cash', active: false },
  // ]);

  // const handleRadioButtonClick = (value) => {
  //   setOptions(
  //     options.map((option) => {
  //       if (option.value === value) {
  //         return {
  //           ...option,
  //           active: true,
  //         };
  //       }
  //       return {
  //         ...option,
  //         active: false,
  //       };
  //     })
  //   );
  // };

  return (
    <div className="App">
      <div className="bgWrapper">
        <Header />
        <NewProduct />
      </div>
      <LinkBar />
    </div>
  );
}

export default App;
