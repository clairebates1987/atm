import bank from '../bankReducer';

let testContext = {
  defaultState: {
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
  },
  action: {
    type: ''
  }
};

it('should return the initial state', () => {
  expect(bank(undefined, testContext.action)).toEqual(testContext.defaultState);
});
