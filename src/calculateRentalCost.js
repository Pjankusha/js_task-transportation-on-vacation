/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const TOTAL_COSTS = 40 * days;

  if (days >= LONG_TERM) {
    return TOTAL_COSTS - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return TOTAL_COSTS - SHORT_TERM_DISCOUNT;
  }

  return TOTAL_COSTS;
}

module.exports = calculateRentalCost;
