/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((x, y) => x - y);
  s = s.sort((x, y) => x - y);
  var result = 0;
  for (var i = 0; i < g.length; i++) {
    while (s.length && g[i] > s[0]) {
      s.shift(1);
    }
    if (s.length) {
      s.shift(1);
      result++;
    } else {
      break;
    }
  }
  return result;
};

console.log(findContentChildren([1,2,3], [1,1]));
console.log(findContentChildren([1,2], [1,2,3]));
console.log(findContentChildren([3,1,2], [1,2,3]));
console.log(findContentChildren([3,1,4,4], [1,2,3,4]));
