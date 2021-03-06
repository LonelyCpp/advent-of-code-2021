const solution = require("./problem_1");
const fs = require("fs");

describe("day 7 problem 1", () => {
  test("sample input", () => {
    const input = "16,1,2,0,4,2,7,1,2,14";

    expect(solution(input)).toBe(37);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_7/input.txt").toString();
    expect(solution(input)).toBe(347011);
  });
});
