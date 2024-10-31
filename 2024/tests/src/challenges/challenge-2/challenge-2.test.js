import { describe, expect, it } from "vitest";
import { battleHorde } from "./challenge-2";

const TEST_DATA = [
  {
    args: ["242", "334"],
    expected: "2h",
  },
  {
    args: ["444", "282"],
    expected: "x",
  },
  {
    args: ["555", "666"],
    expected: "3h",
  },
  {
    args: ["321", "123"],
    expected: "x",
  },
  {
    args: ["4598", "7682"],
    expected: "3z",
  },
  {
    args: ["8989898999", "7779998811"],
    expected: "20z",
  },
  {
    args: ["57685849323", "98765438965"],
    expected: "10h",
  },
];

describe("battleHorde function tests", () => {
  for (const { args, expected } of TEST_DATA) {
    it(`expects battleHorde(${JSON.stringify(args)}) to equal ${JSON.stringify(
      expected
    )}`, () => {
      expect(battleHorde(...args)).toEqual(expected);
    });
  }
});
