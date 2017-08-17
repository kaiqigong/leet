/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var odds = 0;
  var result = 0;
  var map = {};
  for (var i = 0; i < s.length; i++) {
    var tmp = map[s[i]];
    if (tmp) {
      map[s[i]]++;
      if (tmp % 2) {
        result += 2;
        odds -= 1;
      } else {
        odds += 1;
      }
    } else {
      map[s[i]] = 1;
      odds += 1;
    }
  }
  return result + (odds > 0 ? 1 : 0);
};


console.log(longestPalindrome(''));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('aA'));
console.log(longestPalindrome('abc'));
console.log(longestPalindrome('abcabcad'));
console.log(longestPalindrome('abccccdd'));
