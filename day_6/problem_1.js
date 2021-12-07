// (solution credit to reddit discussion)

/**
 * @param {string} input
 */
const main = (input) => {
  // this array keeps track of the number of fishes on each lifecycle index
  // eg:
  // - 0 index -> number of fishes that will reproduce on the next day
  // - 1 index -> number of fishes that will reproduce after 2 days
  // and so on
  const timeLeftCounter = new Array(9).fill(0);

  input.split(",").forEach((item) => {
    timeLeftCounter[Number(item)] += 1;
  });

  timeLeftCounter;

  for (let i = 0; i < 80; i++) {
    // each day, pop the 0 index count and add it to index 8 (new babies)
    const noTimeLeft = timeLeftCounter.shift();
    timeLeftCounter.push(noTimeLeft);

    // add the same count to index 6 (existing fishes, but counter reset)
    timeLeftCounter[6] += noTimeLeft;
  }

  return timeLeftCounter.reduce((prev, cur) => prev + cur, 0);
};

module.exports = main;
