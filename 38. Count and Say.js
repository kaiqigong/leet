/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (!n) {
    return '';
  }
  if (n === 1) {
    return '1';
  }
  var s = countAndSay(n - 1);
  var num = s[0];
  var count = 1;
  var result = '';
  for (var i = 1; i <= s.length; i++) {
    if (s[i] !== num) {
      result += count + num;
      num = s[i];
      count = 1;
    } else {
      count++;
    }
  }
  return result;
};

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))
