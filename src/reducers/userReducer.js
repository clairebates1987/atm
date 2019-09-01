const defaultState = {
  loggedIn: false,
  balance: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('login');
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};
