/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var hOffset = 0;
  var vOffset = 0;
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      vOffset++;
    } else if (moves[i] === 'D') {
      vOffset--;
    } else if (moves[i] === 'L') {
      hOffset++;
    } else {
      hOffset--;
    }
  }
  return hOffset === 0 && vOffset === 0;
};

console.log(judgeCircle('UD'));
