const defaultState = {
  notesAvailable: [
    {
      name: '£20 note',
      value: 20,
      numberAvailable: 7
    },
    {
      name: '£10 note',
      value: 10,
      numberAvailable: 15
    },
    {
      name: '£5 note',
      value: 5,
      numberAvailable: 4
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_NOTES':
      return {
        ...state,
        notesAvailable: action.notes
      };
    default:
      return state;
  }
};
