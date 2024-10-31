export function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;
  for (const [colIndex, _] of Array.from(dream[0].entries()).slice(1)) {
    dream[0][colIndex] += dream[0][colIndex - 1];
  }
  for (const [rowIndex, row] of Array.from(dream.entries()).slice(1)) {
    dream[rowIndex][0] += dream[rowIndex - 1][0];
    for (const [colIndex, _] of Array.from(row.entries()).slice(1)) {
      dream[rowIndex][colIndex] += Math.min(
        dream[rowIndex - 1][colIndex],
        dream[rowIndex][colIndex - 1]
      );
    }
  }
  return dream[rows - 1][cols - 1];
}
