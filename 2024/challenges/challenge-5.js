function escapePyramidHead(room) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let startRow, startCol;
  for (const [i, row] of room.entries()) {
    for (const [j, cell] of row.entries()) {
      if (cell === "▲") {
        startRow = i;
        startCol = j;
      }
    }
  }
  const queue = [[startRow, startCol, 0]];
  while (queue.length) {
    const [row, col, steps] = queue.shift();
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (
        newRow >= 0 &&
        newRow < room.length &&
        newCol >= 0 &&
        newCol < room[0].length &&
        room[newRow][newCol] !== "#"
      ) {
        if (room[newRow][newCol] === "T") {
          return steps + 1;
        }
        queue.push([newRow, newCol, steps + 1]);
        room[newRow][newCol] = "#";
      }
    }
  }
  return -1;
}
