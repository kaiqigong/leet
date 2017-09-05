/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((x, y) => {
    if (y[0] === x[0]) {
      return x[1] - y[1];
    }
    return y[0] - x[0];
  });
  var result = [];
  for (var p of people) {
    result.splice(p[1], 0, p);
  }
  return result;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))
