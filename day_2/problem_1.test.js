const solution = require("./problem_1");
const fs = require("fs");

describe("day 2 problem 1", () => {
  test("sample input", () => {
    const input = `forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`;

    expect(solution(input)).toBe(150);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_2/input.txt").toString();
    expect(solution(input)).toBe(1670340);
  });
});
