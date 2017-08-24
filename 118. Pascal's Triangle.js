/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [];
  for (var i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
    } else {
      var arr = [];
      for (var j = 0; j <= result[i - 1].length; j++) {
        arr.push((result[i - 1][j - 1] | 0) + (result[i - 1][j] | 0 ));
      }
      result.push(arr);
    }
  }
  return result;
};

console.log(generate(5))
