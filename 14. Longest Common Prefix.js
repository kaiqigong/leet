/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) {
    return '';
  }
  var result = strs[0];
  var tmp = '';
  for (var i = 1; i < strs.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (result[j] !== strs[i][j]) {
        break;
      } else {
        tmp += result[j];
      }
    }
    result = tmp;
    tmp = '';
  }
  return result;
};


console.log(longestCommonPrefix(['abcd', 'abce', 'abde']));
