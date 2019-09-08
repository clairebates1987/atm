import React from 'react';
import './stylesheets/balance.scss';

const Balance = props => {
  return (
    <div className='display-balance'>
      <p>Your current balance is:</p>
      <div className='balance'>£{props.balance}</div>
    </div>
  );
};

export default Balance;
