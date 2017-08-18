/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var dictionary = {};
  for (var i = 0; i < s.length; i++) {
    if (dictionary[s[i]]) {
      dictionary[s[i]] += 1;
    } else {
      dictionary[s[i]] = 1;
    }
  }
  for (var i = 0; i < t.length; i++) {
    if (dictionary[t[i]]) {
      dictionary[t[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
console.log(isAnagram("", ""));
console.log(isAnagram("a", ""));
