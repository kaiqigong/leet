/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var plus = true;
  var index = digits.length;
  while (plus) {
    index--;
    if (index >= 0) {
      var val = digits[index] + 1;
      if (val < 10) {
        plus = false;
      }
      digits[index] = val % 10;
    } else {
      plus = false;
      digits.unshift(1);
    }
  }
  return digits;
};

console.log(plusOne([0]))
console.log(plusOne([1]))
console.log(plusOne([1,9]))
console.log(plusOne([9,9]))
console.log(plusOne([9,8]))
