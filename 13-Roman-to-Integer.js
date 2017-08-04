/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (!s) {
    return 0;
  }
  var theMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var len = s.length;
  var result = theMap[s[len - 1]];
  for (var i = 1; i < len; i++) {
    if (theMap[s[len - 1 - i]] < theMap[s[len - i]]) {
      result -= theMap[s[len - 1 - i]];
    } else {
      result += theMap[s[len - 1 - i]];
    }
  }
  return result;
};

console.log(romanToInt('LXX'));
// http://literacy.kent.edu/Minigrants/Cinci/romanchart.htm
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
