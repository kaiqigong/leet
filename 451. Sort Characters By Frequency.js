/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  var map = new Map();
  for (var i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  var arr = Array.from(map.entries());
  arr.sort((x, y) => y[1] - x[1]);
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i][1]; j++) {
      result += arr[i][0];
    }
  }
  return result;
};

console.log(frequencySort('tree'));
