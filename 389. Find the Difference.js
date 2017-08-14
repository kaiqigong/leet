/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
  }
  for (var j = 0; j < t.length; j++) {
    result ^= t.charCodeAt(j);
  }
  return String.fromCharCode(result);
};

console.log(findTheDifference('abcd', 'abcde'));
