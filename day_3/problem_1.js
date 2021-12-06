/**
 * @param {string} input
 */
const main = (input) => {
  const readings = input.split("\n");

  const zeroCounts = Array(readings[0].length).fill(0);
  const oneCounts = Array(readings[0].length).fill(0);

  readings.forEach((reading) => {
    for (let i = 0; i < reading.length; i++) {
      if (reading[i] === "0") {
        zeroCounts[i] += 1;
      } else {
        oneCounts[i] += 1;
      }
    }
  });

  let gammaStr = "";
  let epsilonStr = "";
  for (let i = 0; i < zeroCounts.length; i++) {
    if (zeroCounts[i] > oneCounts[i]) {
      gammaStr += "0";
      epsilonStr += "1";
    } else {
      gammaStr += "1";
      epsilonStr += "0";
    }
  }

  return Number.parseInt(gammaStr, 2) * Number.parseInt(epsilonStr, 2);
};

module.exports = main;
