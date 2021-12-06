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

  instructions.forEach((instruction) => {
    const [command, magnitude] = instruction.trim().split(" ");
    let magnitudeNum = Number(magnitude);

    switch (command) {
      case VALID_COMMANDS.FORWARD:
        h += magnitudeNum;
        break;

      case VALID_COMMANDS.DOWN:
        d += magnitudeNum;
        break;

      case VALID_COMMANDS.UP:
        d -= magnitudeNum;
        break;
    }
  });

  return h * d;
};

module.exports = main;
