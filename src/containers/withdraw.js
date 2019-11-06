import { connect } from 'react-redux';
import Withdraw from '../components/withdraw';
import { calculateBalance } from '../utils/calculate-balance';
import { validateWithdrawal } from '../utils/validate-withdrawal';
import { executeUpdateBalance } from '../actions/userAction';

let showRemainingBalance = false;
let showOverdraft = false;
let showInsufficientFunds = false;

const makeWithdrawal = (
  currentBalance,
  withdrawalAmount,
  overdraftFacility,
  dispatch
) => {
  //console.log(currentBalance, withdrawalAmount);
  const balance = parseInt(currentBalance);
  const amount = parseInt(withdrawalAmount);
  const potentialNewBalance = calculateBalance(balance, amount);

  const isWithdrawalValid = validateWithdrawal(
    potentialNewBalance,
    overdraftFacility
  );

  showRemainingBalance = isWithdrawalValid;
  showOverdraft = isWithdrawalValid && potentialNewBalance < 0;
  showInsufficientFunds = !isWithdrawalValid;

  //console.log(potentialNewBalance);
  //console.log(typeof potentialNewBalance);

  //console.log(executeUpdateBalance(potentialNewBalance));

  //dispatch(executeUpdateBalance(potentialNewBalance));
};

const mapStateToProps = ({ user, bank }) => {
  //console.log(user, bank);
  return {
    user,
    bank,
    showRemainingBalance,
    showOverdraft,
    showInsufficientFunds
  };
};

const mapDispatchToProps = (dispatch, ownProps, thirdThing) => {
  console.log(dispatch, ownProps, thirdThing);
  return {
    calculateBalance: withdrawal => {
      dispatch(calculateBalance(withdrawal));
    },
    makeWithdrawal: amount => {
      makeWithdrawal(
        ownProps.balance,
        amount,
        ownProps.overdraftFacility,
        dispatch
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Withdraw);
