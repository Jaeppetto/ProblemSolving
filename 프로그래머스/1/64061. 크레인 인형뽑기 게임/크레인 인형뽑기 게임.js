function solution(board, moves) {
  const stack = [];
  let copyBoard = board.slice();

  moves.forEach((move) => {
    const currentColumn = move - 1;
    for (let currentRow = 0; currentRow < copyBoard.length; currentRow++) {
      if (copyBoard[currentRow][currentColumn] !== 0) {
        stack.push(copyBoard[currentRow][currentColumn]);
        copyBoard[currentRow][currentColumn] = 0;
        break;
      }
    }
  });

  return crush(stack, 0);
}

function crush(stack, count) {
  for (let i = 0; i < stack.length - 1; i++) {
    if (stack[i] == stack[i + 1]) {
      count += 2;
      stack.splice(i, 2);
      return crush(stack, count);
    }
  }
  return count;
}
