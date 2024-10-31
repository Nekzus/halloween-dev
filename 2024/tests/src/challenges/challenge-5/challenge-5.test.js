import { describe, expect, it } from "vitest";
import { escapePyramidHead } from "./challenge-5";

const TEST_DATA = [
  {
    args: [
      [
        ["T", ".", "#", "."],
        [".", ".", ".", "."],
        ["▲", ".", ".", "#"],
        [".", "#", "#", "#"],
      ],
    ],
    expected: 2,
  },
  {
    args: [
      [
        [".", ".", "#", ".", "▲"],
        ["#", ".", "#", ".", "#"],
        [".", ".", ".", ".", "."],
        ["#", "#", "#", ".", "#"],
        ["T", ".", ".", ".", "."],
      ],
    ],
    expected: 8,
  },
  {
    args: [
      [
        ["#", "#", "#"],
        ["▲", ".", "#"],
        [".", "#", "T"],
      ],
    ],
    expected: -1,
  },
  {
    args: [
      [
        ["#", "#"],
        ["▲", "T"],
      ],
    ],
    expected: 1,
  },
  {
    args: [
      [
        [".", ".", "."],
        ["T", "▲", "."],
        [".", ".", "."],
      ],
    ],
    expected: 1,
  },
];

describe("escapePyramidHead function tests", () => {
  for (const { args, expected } of TEST_DATA) {
    it(`expects escapePyramidHead(${JSON.stringify(
      args
    )}) to equal ${JSON.stringify(expected)}`, () => {
      expect(escapePyramidHead(...args)).toEqual(expected);
    });
  }
});
