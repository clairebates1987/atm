import React from 'react';
import { Link } from 'react-router-dom';

const Options = props => {
  return (
    <div>
      <button>
        <Link to='/balance'>Check Balance</Link>
      </button>
      <button>Make Withdrawal</button>
    </div>
  );
};

export default Options;
