import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RemainingBalance = balance => (
  <p>Your remaining balance is: £{balance}</p>
);

const Overdraft = () => (
  <p>
    Please note this means you are now using your overdraft facility, which has
    a maximum of -£100.
  </p>
);

const InsufficientFunds = balance => (
  <p>You cannot make this withdrawal as your balance would be: £{balance}</p>
);

const Withdraw = props => {
  const [withdrawal, setWithdrawal] = useState();
  return (
    <div>
      <input
        value={withdrawal}
        inputMode='numeric'
        pattern='[0-9]*'
        placeholder='Withdrawal amount'
        onChange={e => {
          setWithdrawal(e.target.value);
        }}
      />
      <button onClick={() => props.makeWithdrawal(withdrawal)}>Withdraw</button>

      {props.showRemainingBalance && (
        <RemainingBalance balance={props.balance} />
      )}

      {props.showOverdraft && <Overdraft />}

      {props.showInsufficientFunds && (
        <InsufficientFunds balance={props.balance} />
      )}
    </div>
  );
};

Withdraw.propTypes = {
  showRemainingBalance: PropTypes.bool,
  showOverdraft: PropTypes.bool,
  showInsufficientFunds: PropTypes.bool
};

Withdraw.defaultProps = {
  showRemainingBalance: false,
  showOverdraft: false,
  showInsufficientFunds: false
};

export default Withdraw;
