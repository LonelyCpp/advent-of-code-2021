/**
 * generates the "most common bit" for each position for the given readings
 *
 * @param {string[]} readings
 */
const getMostCommonBitString = (readings) => {
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
  for (let i = 0; i < zeroCounts.length; i++) {
    if (zeroCounts[i] > oneCounts[i]) {
      gammaStr += "0";
    } else {
      gammaStr += "1";
    }
  }

  return gammaStr;
};

/**
 * iterates thru the list till it is left with only one number that satisfies the "validator" function
 *
 * @param {string[]} readings
 * @param {(currentBitValueAtIndex: '0' | '1', currentMostCommonBitIndex: '0' | '1')=>boolean} validator
 * @returns
 */
const getValidReading = (readings, validator) => {
  let validReadings = readings;
  let currentIterIndex = 0;

  while (validReadings.length > 1) {
    const mostCommonBits = getMostCommonBitString(validReadings);

    validReadings = validReadings.filter((reading) => {
      return validator(
        reading[currentIterIndex],
        mostCommonBits[currentIterIndex]
      );
    });

    currentIterIndex += 1;
  }

  return validReadings[0];
};

/**
 * @param {string} input
 */
const main = (input) => {
  const readings = input.split("\n");

  const o2Reading = getValidReading(readings, (a, b) => a === b);
  const co2Reading = getValidReading(readings, (a, b) => a !== b);

  return Number.parseInt(o2Reading, 2) * Number.parseInt(co2Reading, 2);
};

module.exports = main;
