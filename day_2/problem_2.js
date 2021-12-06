const VALID_COMMANDS = {
  FORWARD: "forward",
  DOWN: "down",
  UP: "up",
};
/**
 * @param {string} input
 */
const main = (input) => {
  const instructions = input.split("\n");

  /** horizontal co-ordinate */
  let h = 0;

  /** depth co-ordinate */
  let d = 0;

  let aim = 0;

  instructions.forEach((instruction) => {
    const [command, magnitude] = instruction.trim().split(" ");
    let magnitudeNum = Number(magnitude);

    switch (command) {
      case VALID_COMMANDS.FORWARD:
        h += magnitudeNum;
        d += aim * magnitudeNum;
        break;

      case VALID_COMMANDS.DOWN:
        aim += magnitudeNum;
        break;

      case VALID_COMMANDS.UP:
        aim -= magnitudeNum;
        break;
    }
  });

  return h * d;
};

module.exports = main;
