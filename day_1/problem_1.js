/**
 * @param {string} input
 */
const main = (input) => {
  const arr = input.split("\n").map((inp) => Number(inp));

  return arr.reduce((count, currentVal, index) => {
    if (index === 0) {
      return count;
    }

    if (arr[index - 1] < currentVal) {
      return count + 1;
    }

    return count;
  }, 0);
};

module.exports = main;
