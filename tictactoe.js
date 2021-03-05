function isWin(board) {
  let size = board[0].length;
  let isWin = false;
  let rowSum = 0;
  let colSum = 0;
  let rightDiagonalSum = 0;
  let leftDiagonalSum = 0;
  for (let i=0; i<size; i++) {
    rowSum = 0;
    colSum = 0;
    for (let j=0; j<size; j++) {
      rowSum += board[i][j];
      colSum += board[j][i];
      // left diagonal sum
      if (i === j) {
        leftDiagonalSum += board[i][j];
      }
      // right diagonal sum
      if (i+j === size-1) {
        rightDiagonalSum += board[i][j];
      }
    }
    // handle all elements of rows are 0 or 1
    if (rowSum === size || rowSum === 0) {
      console.log('Winner with Row No '+(i+1)+' with all '+ rowSum/rowSum);
      return true;
    }
    // handle all elements of columns are 0 or 1
    if (colSum === size || colSum === 0) {
      console.log('Winner with Column No '+(i+1)+' with all '+ colSum/colSum);
      return true;
    }
  }
  // handle all elements of left diagonalSum are 0 or 1
  if (leftDiagonalSum === size || leftDiagonalSum === 0) {
    let val = leftDiagonalSum === size ? 1 : 0;
    console.log('Winner with left diagonal with all ' + val);
    return true;
  }
  // handle all elements of right diagonalSum are 0 or 1
  if (rightDiagonalSum === size || rightDiagonalSum === 0) {
    let val = rightDiagonalSum === size ? 1 : 0;
    console.log('Winner with right diagonal with all ' + val);
    return true;
  }
  console.log('Game is Drawn :)');
  return false;
}
const board = [
  [0, 1, 0],
  [1, 0, 0],
  [1, 1, 1]
 ];
// (0,0) (1,1) (2,2)
// (0,2) (1,1) (2,0)
const board2 = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 0]
 ];
// (0,0) (1,1) (2,2)
// (0,2) (1,1) (2,0)
const board3 = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0],
 ];
// (0,0) (1,1) (2,2) (3,3) (4,4)
// (0,4) (1,3) (2,2) (3,1) (4,0)
const board4 = [
  [0, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1],
 ];
const board5 = [
  [1, 0, 0],
  [0, 1, 1],
  [1, 0, 0]
 ];
console.log(isWin(board));
console.log(isWin(board2));
console.log(isWin(board3));
console.log(isWin(board4));
console.log(isWin(board5));
