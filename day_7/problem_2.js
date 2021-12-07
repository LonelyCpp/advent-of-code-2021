/**
 * @param {number[]} arr
 * @param {number} desination
 * @returns
 */
const getCost = (arr, desination) => {
  let cost = 0;

  arr.forEach((sub) => {
    const distance = Math.abs(sub - desination);
    const subCost = (distance * (distance + 1)) / 2;
    cost += subCost;
  });

  return cost;
};
/**
 * @param {string} input
 */
const main = (input) => {
  const arr = input.split(",").map(Number);

  const mean = Math.floor(
    arr.reduce((prev, cur) => prev + cur, 1) / arr.length
  );

  return Math.min(
    getCost(arr, mean),
    getCost(arr, mean - 1),
    getCost(arr, mean + 1)
  );
};

module.exports = main;
