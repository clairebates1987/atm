import { calculateBalance } from '../calculate-balance';

describe('Calculate balance function', () => {
  const testContext = {
    currentBalance: 220,
    withdrawalAmount: 140
  };

  it('returns 80', () => {
    expect(
      calculateBalance(testContext.currentBalance, testContext.withdrawalAmount)
    ).toEqual(80);
  });
});
