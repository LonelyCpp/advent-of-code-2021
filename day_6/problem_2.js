// (solution explanation in problem_1)

/**
 * @param {string} input
 */
const main = (input) => {
  const timeLeftCounter = new Array(9).fill(0);

  input.split(",").forEach((item) => {
    timeLeftCounter[Number(item)] += 1;
  });

  timeLeftCounter;

  for (let i = 0; i < 256; i++) {
    const noTimeLeft = timeLeftCounter.shift();
    timeLeftCounter.push(noTimeLeft);
    timeLeftCounter[6] += noTimeLeft;
  }

  return timeLeftCounter.reduce((prev, cur) => prev + cur, 0);
};

module.exports = main;
