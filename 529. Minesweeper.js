/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  var x = click[0];
  var y = click[1];
  if (board[x][y] === 'M') {
    board[x][y] = 'X';
    return board;
  }
  var reveal = function(board, point) {
    var mineCount = 0;
    if (board[point[0] - 1] && board[point[0] - 1][point[1] - 1] === 'M') {
      mineCount++;
    }
    if (board[point[0] - 1] && board[point[0] - 1][point[1]] === 'M') {
      mineCount++;
    }
    if (board[point[0] - 1] && board[point[0] - 1][point[1] + 1] === 'M') {
      mineCount++;
    }
    if (board[point[0]][point[1] - 1] === 'M') {
      mineCount++;
    }
    if (board[point[0]][point[1] + 1] === 'M') {
      mineCount++;
    }
    if (board[point[0] + 1] && board[point[0] + 1][point[1] - 1] === 'M') {
      mineCount++;
    }
    if (board[point[0] + 1] && board[point[0] + 1][point[1]] === 'M') {
      mineCount++;
    }
    if (board[point[0] + 1] && board[point[0] + 1][point[1] + 1] === 'M') {
      mineCount++;
    }
    if (mineCount === 0) {
      board[point[0]][point[1]] = 'B';
      board[point[0] - 1] && board[point[0] - 1][point[1] - 1] === 'E' && reveal(board, [point[0] - 1, point[1] - 1]);
      board[point[0] - 1] && board[point[0] - 1][point[1]] === 'E' && reveal(board, [point[0] - 1, point[1]]);
      board[point[0] - 1] && board[point[0] - 1][point[1] + 1] === 'E' && reveal(board, [point[0] - 1, point[1] + 1]);
      board[point[0]][point[1] - 1] === 'E' && reveal(board, [point[0], point[1] - 1]);
      board[point[0]][point[1] + 1] === 'E' && reveal(board, [point[0], point[1] + 1]);
      board[point[0] + 1] && board[point[0] + 1][point[1] - 1] === 'E' && reveal(board, [point[0] + 1, point[1] - 1]);
      board[point[0] + 1] && board[point[0] + 1][point[1]] === 'E' && reveal(board, [point[0] + 1, point[1]]);
      board[point[0] + 1] && board[point[0] + 1][point[1] + 1] === 'E' && reveal(board, [point[0] + 1, point[1] + 1]);
    } else {
      board[point[0]][point[1]] = mineCount;
    }
  }
  reveal(board, click);
  return board;
};


console.log(updateBoard(["B1E1B","B1M1B","B111B","BBBBB"], [0,2]));

