const solution = require("./problem_1");
const fs = require("fs");

describe("day 1 problem 1", () => {
  test("sample input", () => {
    const input = `199
    200
    208
    210
    200
    207
    240
    269
    260
    263`;
    expect(solution(input)).toBe(7);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_1/input.txt").toString();
    expect(solution(input)).toBe(1692);
  });
});
