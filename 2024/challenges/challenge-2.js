function battleHorde(zombies, humans) {
  let zPower = 0,
    hPower = 0;
  for (let i = 0; i < zombies.length; i++) {
    const zAttack = zPower + +zombies[i];
    const hAttack = hPower + +humans[i];
    zPower = (zAttack > hAttack) * (zAttack - hAttack);
    hPower = (hAttack > zAttack) * (hAttack - zAttack);
  }
  const zResult = `${zPower}z`;
  const hResult = `${hPower}h`;
  const xResult = "x";
  const outputIndex = !!zPower + 2 * !!hPower;
  return [xResult, zResult, hResult, hResult][outputIndex];
}
