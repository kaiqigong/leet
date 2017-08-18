/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var sum = 0;
  while (n) {
    sum += (n % 10) * (n % 10);
    n = n / 10 | 0;
  }
  if (sum === 1) {
    return true;
  } else if (sum === 2 || sum === 4 || sum === 5 || sum === 6 || sum === 8 || sum === 9) {
    return false;
  } else return isHappy(sum);
};

console.log(isHappy(19));
console.log(isHappy(20));
console.log(isHappy(23));
console.log(isHappy(1111111));
