import { describe, expect, it } from "vitest";
import { createMagicPotion } from "./reto-1";

const TEST_DATA = [
  {
    args: [[13, 5, 6, 2], 8],
    expected: [2, 3],
  },
  {
    args: [[11, 3, 7, 5], 10],
    expected: [1, 2],
  },
  {
    args: [[4, 3, 2, 3, 4], 6],
    expected: [0, 2],
  },
  {
    args: [[0, 0, -2, 3], 2],
    expected: undefined,
  },
  {
    args: [[10, 5, 2, 3, 7, 5], 10],
    expected: [3, 4],
  },
  {
    args: [[1, 2, 3, 4, 5], 8],
    expected: [2, 4],
  },
  {
    args: [[5, 1, 4, 6, 2], 9],
    expected: [0, 2],
  },
  {
    args: [[1, -2, 3, -4, 5], -1],
    expected: [0, 1],
  },
  {
    args: [[10, 20, 30, 40], 50],
    expected: [1, 2],
  },
  {
    args: [[], 10],
    expected: undefined,
  },
];

describe("createMagicPotion function tests", () => {
  for (const { args, expected } of TEST_DATA) {
    it(`expects createMagicPotion(${JSON.stringify(
      args
    )}) to equal ${JSON.stringify(expected)}`, () => {
      expect(createMagicPotion(...args)).toEqual(expected);
    });
  }
});
