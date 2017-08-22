/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  var count = 0;
  var word = false;
  for (var i = 0, len = s.length; i < len; i++) {
    if (s[i] === ' ' && word) {
      count++;
      word = false;
    } else if (s[i] !== ' ') {
      word = true;
    }
  }
  return count + (word ? 1 : 0);
};

console.log(countSegments(''));
console.log(countSegments(' '));
console.log(countSegments('abc def'));
console.log(countSegments('abc def '));
console.log(countSegments(' abc def '));
console.log(countSegments('abc  def '));
