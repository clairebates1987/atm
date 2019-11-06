export const validateWithdrawal = (newBalance, overdraftFacility) => {
  return newBalance >= overdraftFacility;
};
