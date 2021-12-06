const solution = require("./problem_2");
const fs = require("fs");

const WINDOW_SIZE = 3;

describe("day 1 problem 2", () => {
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
    expect(solution(input, WINDOW_SIZE)).toBe(5);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_1/input.txt").toString();
    expect(solution(input, WINDOW_SIZE)).toBe(1724);
  });
});
