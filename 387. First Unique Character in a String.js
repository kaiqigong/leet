/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (var i = 0; i < s.length; i++) {
    var diff = true;
    for (var j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        diff = false;
        break;
      }
    }
    for (var j = 0; j < i; j++) {
      if (s[i] === s[j]) {
        diff = false;
        break;
      }
    }
    if (diff) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('cc'));
