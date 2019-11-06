import * as Actions from '../actions/constants';

const defaultState = {
  loggedIn: true,
  errorLoggingIn: '',
  balance: 0,
  overdraftFacility: 100
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        loggedIn: true,
        errorLoggingIn: ''
      };
    case Actions.UPDATE_BALANCE:
      return {
        ...state,
        balance: action.amount
      };
    case Actions.SET_LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        errorLoggingIn: 'Invalid PIN. Please try again.'
      };
    default:
      return state;
  }
};
