/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1) {
    return false;
  }
  var sum = 1;
  var divisors = [1];
  var max = Math.ceil(num / 2);
  for (var i = 2; i < max; i++) {
    if (num % i === 0 && i !== num / i) {
      divisors.push(i)
      divisors.push(num / i);
      sum += i;
      sum += num / i;
      max = num / i;
    } else if (num % i === 0 && i === num / i) {
      divisors.push(i)
      sum += i;
      max = num / i;
    }
  }
  return num === sum;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(1));
console.log(checkPerfectNumber(2));
console.log(checkPerfectNumber(16));
