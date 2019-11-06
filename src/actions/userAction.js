import * as Actions from './constants';
import axios from 'axios';
import { push } from 'connected-react-router';

export const logUserIn = () => ({ type: Actions.LOGIN });

export const updateBalance = balance => ({
  type: Actions.UPDATE_BALANCE,
  amount: balance
});

export const loginFailure = () => ({
  type: Actions.SET_LOGIN_FAILURE
});

export const enterPin = pin => {
  return dispatch => {
    return axios
      .post('https://frontend-challenge.screencloud-michael.now.sh/api/pin/', {
        pin: pin
      })
      .then(res => {
        const balance = res.data.currentBalance;
        dispatch(logUserIn());
        dispatch(updateBalance(balance));
        dispatch(push('/options'));
      })
      .catch(err => {
        dispatch(loginFailure());
      });
  };
};

export const executeUpdateBalance = balance => {
  return dispatch => {
    dispatch(updateBalance(balance));
  };
};
