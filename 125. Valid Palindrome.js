/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var str1 = '';
  var str2 = '';
  for (var i = 0; i < s.length; i++) {
    if ((s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) || (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)) {
      str1 += s[i];
      str2 = s[i] + str2;
    } else if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      str1 += String.fromCharCode(s[i].charCodeAt() + 32);
      str2 = String.fromCharCode(s[i].charCodeAt() + 32) + str2;
    }
  }
  return str1 === str2;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));
