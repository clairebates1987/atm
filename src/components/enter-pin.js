import React, { useState } from 'react';
import './stylesheets/enter-pin.scss';

const EnterPin = props => {
  const [pin, setPin] = useState('');

  return (
    <div className='enter-pin'>
      <input
        value={pin}
        inputMode='numeric'
        pattern='[0-9]*'
        type='password'
        maxLength='4'
        placeholder='Enter pin here'
        onChange={e => {
          setPin(e.target.value);
        }}
      />

      <div className='keypad'>
        <div className='keys' tabIndex='7'>
          7
        </div>
        <div className='keys' tabIndex='8'>
          8
        </div>
        <div className='keys' tabIndex='9'>
          9
        </div>
        <div className='keys' tabIndex='4'>
          4
        </div>
        <div className='keys' tabIndex='5'>
          5
        </div>
        <div className='keys' tabIndex='6'>
          6
        </div>
        <div className='keys' tabIndex='1'>
          1
        </div>
        <div className='keys' tabIndex='2'>
          2
        </div>
        <div className='keys' tabIndex='3'>
          3
        </div>
      </div>

      <button onClick={() => props.enterPin(pin)}>Enter</button>
      {props.errorLoggingIn && (
        <p className='invalid-pin'>Error: {props.errorLoggingIn}</p>
      )}
    </div>
  );
};

export default EnterPin;
