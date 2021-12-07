/**
 * @param {string} input
 */
const main = (input) => {
  const arr = input
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);

  const midIndex = Math.ceil(arr.length / 2) - 1;

  let median;
  if (arr.length % 2) {
    median = arr[midIndex];
  } else {
    median = (arr[midIndex] + arr[midIndex + 1]) / 2;
  }

  return arr.reduce((prev, cur) => prev + Math.abs(cur - median), 0);
};

module.exports = main;
