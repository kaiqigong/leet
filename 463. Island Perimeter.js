/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var height = grid.length;
  var width = grid[0].length;
  var perimeter = 0;
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (grid[i][j]) {
        // count up
        if (i === 0) {
          perimeter++;
        } else if (grid[i - 1][j] === 0) {
          perimeter++;
        }
        // count left
        if (j === 0) {
          perimeter++;
        } else if (grid[i][j - 1] === 0) {
          perimeter++;
        }
        // count bottom
        if (i === height - 1) {
          perimeter++;
        } else if (grid[i + 1][j] === 0) {
          perimeter++;
        }
        // count right
        if (j === width - 1) {
          perimeter++;
        } else if (grid[i][j + 1] === 0) {
          perimeter++;
        }
      }
    }
  }
  return perimeter;
};

console.log(islandPerimeter([[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]));
