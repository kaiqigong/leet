/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  var count = 0;
  var extendPalindrome = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++; left--; right++;
    }
  };
  if (!s) return 0;
  for (var i = 0; i < s.length; i++) { // i is the mid point
    extendPalindrome(i, i); // odd length;
    extendPalindrome(i, i + 1); // even length
  }
  return count;
};

console.log(countSubstrings('abc'))
console.log(countSubstrings('kkk'))
