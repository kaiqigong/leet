/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  var curr = 0, sum = 0;
  for (var i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
      curr += 1;
      sum += curr;
    } else {
      curr = 0;
    }
  }
  return sum;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]))
