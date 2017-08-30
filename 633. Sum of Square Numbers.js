/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  var mid = c / 2;
  var b = Math.ceil(Math.sqrt(mid));
  var a;
  while(b * b <= c) {
    a = ~~(Math.sqrt((c - b * b)));
    if (a * a + b * b === c) {
      return true;
    }
    b++;
  }
  return false;
};

console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(1))
console.log(judgeSquareSum(0))
console.log(judgeSquareSum(2))
console.log(judgeSquareSum(18))
console.log(judgeSquareSum(4))
