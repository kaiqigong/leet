/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  if (!s) {
    return '';
  }
  return s.split(' ').map((word) => {
    return word.split('').reverse().join('');
  }).join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
