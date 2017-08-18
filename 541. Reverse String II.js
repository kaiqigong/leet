/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  s = s.split('');
  for (var i = 0; i < s.length; ) {
    console.log(i)
    var slice = s.slice(i, i + k);
    var len = slice.length < k ? slice.length : k;
    for (var j = 0; j < len; j++) {
      s[i + j] = slice[len - j - 1];
    }
    i += (2 * k);
  }
  return s.join('');
};

console.log(reverseStr('abcdefg', 2));
