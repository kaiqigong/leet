/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  var count = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'X') {
        count++;
        if (board[i][j + 1] === 'X' || (board[i + 1] && board[i + 1][j] === 'X')) {
          count--;
        }
      }
    }
  }
  return count;
};

console.log(countBattleships([
  ['X', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ]));
