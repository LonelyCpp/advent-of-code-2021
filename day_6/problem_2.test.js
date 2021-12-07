const solution = require("./problem_2");
const fs = require("fs");

describe("day 6 problem 2", () => {
  test("sample input", () => {
    const input = "3,4,3,1,2";

    expect(solution(input)).toBe(26984457539);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_6/input.txt").toString();
    expect(solution(input)).toBe(1708791884591);
  });
});
