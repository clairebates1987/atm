import React, { useState } from 'react';

const Withdraw = props => {
  const [balance, setBalance] = useState(220);
  const [withdrawal, setWithdrawal] = useState();
  return (
    <div>
      <input
        value={withdrawal}
        type='text'
        placeholder='Withdrawal amount'
        onChange={e => setWithdrawal(e.target.value)}
      />
    </div>
  );
};

export default Withdraw;
