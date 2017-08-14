/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var magazineMap = {};
  for (var i = 0; i < magazine.length; i++) {
    if (magazineMap[magazine[i]]) {
      magazineMap[magazine[i]]++;
    } else {
      magazineMap[magazine[i]] = 1;
    }
  }
  for (var i = 0; i < ransomNote.length; i++) {
    if (magazineMap[ransomNote[i]]) {
      magazineMap[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
};


console.log(canConstruct("aaa", "aab"));
