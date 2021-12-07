const solution = require("./problem_1");
const fs = require("fs");

describe("day 6 problem 1", () => {
  test("sample input", () => {
    const input = "3,4,3,1,2";

    expect(solution(input)).toBe(5934);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_6/input.txt").toString();
    expect(solution(input)).toBe(380243);
  });
});
