class HorVerLine {
  /**
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   */
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  /**
   * generates all points on the line segment
   */
  *pointGenerator() {
    if (this.y1 === this.y2) {
      // horizontal line

      const len = Math.abs(this.x1 - this.x2);
      const stepper = this.x1 > this.x2 ? -1 : 1;

      for (let i = 0; i <= len; i++) {
        yield [this.x1 + i * stepper, this.y1];
      }
    } else {
      // vertical line

      const len = Math.abs(this.y1 - this.y2);
      const stepper = this.y1 > this.y2 ? -1 : 1;

      for (let i = 0; i <= len; i++) {
        yield [this.x1, this.y1 + i * stepper];
      }
    }
  }
}

/**
 * @param {string} input
 */
const main = (input) => {
  const lines = [];

  input.split("\n").forEach((line) => {
    const [start, end] = line.split(" -> ");

    const [x1, y1] = start.split(",").map(Number);
    const [x2, y2] = end.split(",").map(Number);

    if (y1 === y2 || x1 === x2) {
      lines.push(new HorVerLine(x1, y1, x2, y2));
    }
  });

  const visitedPoints = new Set();
  const doubleVisitPoints = new Set();
  let count = 0;

  for (line of lines) {
    for (point of line.pointGenerator()) {
      const pointStr = point.toString();
      if (visitedPoints.has(pointStr)) {
        if (doubleVisitPoints.has(pointStr)) {
          continue;
        }

        count += 1;
        doubleVisitPoints.add(pointStr);
      }

      visitedPoints.add(pointStr);
    }
  }

  return count;
};

module.exports = main;
