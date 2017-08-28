/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var arr = str.split(' ');
  if (arr.length !== pattern.length) {
    return false;
  }
  var map = {};
  var patterns = [];
  for (var i = 0; i < pattern.length; i++) {
    if (map[pattern[i]] && map[pattern[i]] !== arr[i]) {
      return false;
    } else if (!map[pattern[i]]) {
      if (patterns.indexOf(arr[i]) > -1) {
        return false;
      }
      map[pattern[i]] = arr[i];
      patterns.push(arr[i]);
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
