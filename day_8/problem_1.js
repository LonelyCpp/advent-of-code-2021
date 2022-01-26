/**
 * @param {string} input
 */
const main = (input) => {
  const uniqueLengths = [2, 3, 4, 7];

  let count = 0;

  input
    .trim()
    .split("\n")
    .forEach((line) => {
      const [, output] = line.split(" | ");

      output.split(" ").forEach((signal) => {
        if (uniqueLengths.includes(signal.length)) {
          count += 1;
        }
      });
    });

  return count;
};

module.exports = main;
