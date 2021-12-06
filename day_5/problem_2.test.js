const solution = require("./problem_2");
const fs = require("fs");

describe("day 5 problem 2", () => {
  test("sample input", () => {
    const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

    expect(solution(input)).toBe(12);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_5/input.txt").toString();
    expect(solution(input)).toBe(18442);
  });
});
