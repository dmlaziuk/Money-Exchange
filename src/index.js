// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  if (currency === 0) return ({});
  const halfDollars = Math.floor(currency / 50);
  let modulo = currency % 50;
  const quarters = Math.floor(modulo / 25);
  modulo %= 25;
  const dimes = Math.floor(modulo / 10);
  modulo %= 10;
  const nickels = Math.floor(modulo / 5);
  modulo %= 5;
  const pennies = modulo;
  const result = {};
  if (halfDollars > 0) result.H = halfDollars;
  if (quarters > 0) result.Q = quarters;
  if (dimes > 0) result.D = dimes;
  if (nickels > 0) result.N = nickels;
  if (pennies > 0) result.P = pennies;
  return result;
};
