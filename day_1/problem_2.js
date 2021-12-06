/**
 * @param {string} input
 * @param {number} windowSize
 */
const main = (input, windowSize) => {
  const arr = input.split("\n").map((inp) => Number(inp));

  let currentWindowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    currentWindowSum += arr[i];
  }

  let count = 0;
  for (let i = windowSize; i < arr.length; i++) {
    const newWindowSum = currentWindowSum + arr[i] - arr[i - windowSize];

    if (currentWindowSum < newWindowSum) {
      count += 1;
    }

    currentWindowSum = newWindowSum;
  }

  return count;
};

module.exports = main;
