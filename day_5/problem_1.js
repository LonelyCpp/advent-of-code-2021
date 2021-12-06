class HorVerLine {
  /**
   * @param {number} v1
   * @param {number} v2
   */
  static sort2Values = (v1, v2) => {
    if (v1 > v2) {
      return [v2, v1];
    }

    return [v1, v2];
  };

  /**
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   */
  constructor(x1, y1, x2, y2) {
    this.isHorizontal = y1 === y2;
    if (this.isHorizontal) {
      this.y1 = this.y2 = y1;
      [this.x1, this.x2] = HorVerLine.sort2Values(x1, x2);
    } else {
      this.x1 = this.x2 = x1;
      [this.y1, this.y2] = HorVerLine.sort2Values(y1, y2);
    }
  }

  *pointGenerator() {
    if (this.isHorizontal) {
      for (let i = this.x1; i <= this.x2; i++) {
        yield [i, this.y1];
      }
    } else {
      for (let i = this.y1; i <= this.y2; i++) {
        yield [this.x1, i];
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
