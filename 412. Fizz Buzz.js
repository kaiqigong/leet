/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var results = [];
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(i + '');
    }
  }
  return results;
};

console.log(fizzBuzz(15));
