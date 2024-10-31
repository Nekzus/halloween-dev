import { describe, expect, it } from "vitest";
import { findTheKiller } from "./challenge-4";

const TEST_DATA = [
  {
    args: [
      "d~~~~~a",
      ["Dracula", "Freddy Krueger", "Jason Voorhees", "Michael Myers"],
    ],
    expected: "Dracula",
  },
  {
    args: ["~r~dd~", ["Freddy", "Freddier", "Fredderic"]],
    expected: "Freddy,Freddier,Fredderic",
  },
  {
    args: ["~r~dd$", ["Freddy", "Freddier", "Fredderic"]],
    expected: "",
  },
  {
    args: ["mi~~def", ["Midudev", "Midu", "Madeval"]],
    expected: "",
  },
  {
    args: ["~~~~~~", ["Pennywise", "Leatherface", "Agatha"]],
    expected: "Pennywise,Leatherface,Agatha",
  },
  {
    args: ["~~~~~~$", ["Pennywise", "Leatherface", "Agatha"]],
    expected: "Agatha",
  },
  {
    args: ["s~v~r~", ["Severus Snape", "Sirius Black", "Salazar Slytherin"]],
    expected: "Severus Snape",
  },
  {
    args: ["~~~~~y$", ["Chucky", "Tiffany", "Freddy", "Mickey"]],
    expected: "Chucky,Freddy,Mickey",
  },
];

describe("findTheKiller function tests", () => {
  for (const { args, expected } of TEST_DATA) {
    it(`expects findTheKiller(${JSON.stringify(
      args
    )}) to equal ${JSON.stringify(expected)}`, () => {
      expect(findTheKiller(...args)).toEqual(expected);
    });
  }
});
