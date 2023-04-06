const valid = `123456789`;

const validRows = (board) => {
  for (const row of board) {
    const row1 = [...row];
    if (row1.sort().join(``) !== valid) return false;
  }
  return true;
};

const validCols = (board) => {
  for (let c = 0; c < 9; c++) {
    const col = [];
    for (let r = 0; r < 9; r++) {
      col.push(board[r][c]);
    }
    if (col.sort().join(``) !== valid) return false;
  }
  return true;
};

const validblocks = (board) => {
  for (let c = 0; c < 3; c++) {
    for (let r = 0; r < 3; r++) {
      const block = [];
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          block.push(board[c * 3 + m][r * 3 + n]);
        }
      }
      if (block.sort().join(``) !== valid) return false;
    }
  }
  return true;
};

function validSolution(board) {
  return validRows([...board]) && validCols(board) && validblocks(board)
    ? true
    : false;
}

console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
  ])
);
