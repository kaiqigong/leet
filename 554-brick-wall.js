/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  var map = {};
  var height = wall.length;
  for (var i = 0; i < height; i++) {
    var row = wall[i];
    var calc = 0;
    for (var j = 0; j < row.length - 1; j++) {
      calc += row[j];
      map[calc] = map[calc] ? map[calc] + 1 : 1;
    }
  }
  var max = 0;
  for (var key in map) {
    if (map[key] > max) max = map[key];
  }
  return height - max;
};
