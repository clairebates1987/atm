import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnterPin = props => {
  const [pin, setPin] = useState('');

  return (
    <div>
      <input
        value={pin}
        type='number'
        maxLength='4'
        placeholder='Enter pin here'
        onChange={e => {
          setPin(e.target.value);
        }}
      />
      {/*<button onClick={props.enterPin(pin)}>Enter</button>*/}
      <button>
        <Link to='/options'>Enter</Link>
      </button>
    </div>
  );
};

export default EnterPin;
