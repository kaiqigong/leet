/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  var width = m;
  var height = n;
  for (var i = 0; i < ops.length; i++) {
    width = Math.min(width, ops[i][0]);
    height = Math.min(height, ops[i][1]);
  }
  return width * height;
};

console.log(maxCount(3, 3, [[2,2],[3,3]]));
