var assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  var arr = s.split('');
  var start = 0;
  var end = s.length - 1;
  while (start < end) {
    var startVowel = false;
    var endVowel = false;
    while (!startVowel && start < end) {
      if (vowels.has(arr[start])) {
        startVowel = true;
      } else {
        start++;
      }
    }
    while (!endVowel && start < end) {
      if (vowels.has(arr[end])) {
        endVowel = true;
      } else {
        end--;
      }
    }
    if (startVowel && endVowel) {
      var tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      start++;
      end--;
    }
  }
  return arr.join('');
};


assert.equal(reverseVowels('hello'), 'holle');
assert.equal(reverseVowels('leetcode'), 'leotcede');

