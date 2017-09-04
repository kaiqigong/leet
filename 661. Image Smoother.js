/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  var height = M.length;
  var width = M[0].length;
  var result = [];
  for (var i = 0; i < height; i++) {
    result.push([]);
    for (var j = 0; j < width; j++) {
      count = 1;
      sum = M[i][j];
      if (M[i][j - 1] != undefined ) {
        count += 1;
        sum += M[i][j - 1];
      }
      if (M[i][j + 1] != undefined ) {
        count += 1;
        sum += M[i][j + 1];
      }
      if (M[i - 1]) {
        count++;
        sum += M[i - 1][j];
        if (M[i - 1][j - 1] != undefined ) {
          count += 1;
          sum += M[i - 1][j - 1];
        }
        if (M[i - 1][j + 1] != undefined ) {
          count += 1;
          sum += M[i - 1][j + 1];
        }
      }
      if (M[i + 1]) {
        count++;
        sum += M[i + 1][j];
        if (M[i + 1][j - 1] != undefined ) {
          count += 1;
          sum += M[i + 1][j - 1];
        }
        if (M[i + 1][j + 1] != undefined ) {
          count += 1;
          sum += M[i + 1][j + 1];
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
};

console.log(imageSmoother([[1,1,1],
 [1,0,1],
 [1,1,1]]));
