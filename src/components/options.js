import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/options.scss';

const Options = props => {
  console.log(props.loggedIn);
  return (
    <div>
      <div className='options'>
        <button className='option'>
          <Link to='/balance'>Check Balance</Link>
        </button>
        <button className='option'>
          <Link to='/withdraw'>Make Withdrawal</Link>
        </button>
      </div>
    </div>
  );
};

export default Options;
