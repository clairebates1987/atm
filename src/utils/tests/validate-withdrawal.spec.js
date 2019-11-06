import { validateWithdrawal } from '../validate-withdrawal';

describe('Validate balance function', () => {
  const testContext = {
    newBalance: -120,
    overdraftFacility: 100
  };

  it('returns false', () => {
    expect(
      validateWithdrawal(testContext.newBalance, testContext.overdraftFacility)
    ).toEqual(false);
  });
});
