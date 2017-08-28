/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (s.length < p.length) {
    return [];
  }
  var result = [];
  var map = {};
  for (var i = 0; i < p.length; i++) {
    map[p[i]] = ~~map[p[i]] + 1;
  }
  var left = 0, right = 0, count = p.length;
  while (right < s.length) {
    if (map[s[right++]]-- >= 1) count--;
    if (count == 0) result.push(left);
    if (right - left == p.length && map[s[left++]]++ >= 0) count++;
  }
  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))
