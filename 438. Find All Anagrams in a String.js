/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  var res = 0;
  if (s.length < p.length) {
    return [];
  }
  for (var j = 0; j < p.length; j++) {
    res ^= s[j].charCodeAt();
    res ^= p[j].charCodeAt();
  }
  var result = [];
  if (res === 0) {
    result.push(0);
  }
  for (var i = 1; i < s.length - p.length + 1; i++) {
    res ^= s[i - 1].charCodeAt();
    res ^= s[i + p.length - 1].charCodeAt();
    if (res === 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
