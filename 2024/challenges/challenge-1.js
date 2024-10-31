export function createMagicPotion(potions, target) {
  const seenPotions = new Map();
  for (const [index, potion] of potions.entries()) {
    if (seenPotions.has(target - potion)) {
      return [seenPotions.get(target - potion), index];
    }
    seenPotions.set(potion, index);
  }
  return undefined;
}
