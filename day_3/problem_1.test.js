const solution = require("./problem_1");
const fs = require("fs");

describe("day 3 problem 1", () => {
  test("sample input", () => {
    const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

    expect(solution(input)).toBe(198);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_3/input.txt").toString();
    expect(solution(input)).toBe(738234);
  });
});
