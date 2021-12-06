class Line {
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

  *pointGenerator() {
    let xStepper = 0;
    if (this.x1 > this.x2) {
      xStepper = -1;
    } else if (this.x1 < this.x2) {
      xStepper = 1;
    }

    let yStepper = 0;
    if (this.y1 > this.y2) {
      yStepper = -1;
    } else if (this.y1 < this.y2) {
      yStepper = 1;
    }

    if (this.y1 === this.y2) {
      // horizontal line
      const len = Math.abs(this.x1 - this.x2);
      for (let i = 0; i <= len; i++) {
        yield [this.x1 + xStepper * i, this.y1];
      }
    } else if (this.x1 === this.x2) {
      // vertical line
      const len = Math.abs(this.y1 - this.y2);
      for (let i = 0; i <= len; i++) {
        yield [this.x1, this.y1 + yStepper * i];
      }
    } else {
      // 45 degree line
      const len = Math.abs(this.y1 - this.y2);
      for (let i = 0; i <= len; i++) {
        yield [this.x1 + xStepper * i, this.y1 + yStepper * i];
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

    lines.push(new Line(x1, y1, x2, y2));
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
