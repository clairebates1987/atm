export const logUserIn = () => dispatch => {
  dispatch({
    type: 'LOGIN'
  });
};

export const updateBalance = balance => dispatch => {
  dispatch({
    type: 'UPDATE_BALANCE',
    amount: balance
  });
};
