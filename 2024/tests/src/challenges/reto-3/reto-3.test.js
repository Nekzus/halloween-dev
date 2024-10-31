import { describe, expect, it } from "vitest";
import { findSafestPath } from "./reto-3";

const TEST_DATA = [
  {
    args: [
      [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
    ],
    expected: 7,
  },
  {
    args: [
      [
        [5, 9],
        [4, 2],
      ],
    ],
    expected: 11,
  },
  {
    args: [
      [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
    ],
    expected: 5,
  },
  {
    args: [
      [
        [1, 2, 3],
        [3, 2, 1],
        [4, 4, 4],
      ],
    ],
    expected: 10,
  },
  {
    args: [
      [
        [1, 2],
        [3, 4],
        [6, 5],
        [7, 8],
      ],
    ],
    expected: 20,
  },
  {
    args: [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    ],
    expected: 21,
  },
];

describe("findSafestPath function tests", () => {
  for (const { args, expected } of TEST_DATA) {
    it(`expects findSafestPath(${JSON.stringify(
      args
    )}) to equal ${JSON.stringify(expected)}`, () => {
      expect(findSafestPath(...args)).toEqual(expected);
    });
  }
});
