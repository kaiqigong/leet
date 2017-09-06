/**
 * @param {number[][]} M
 * @return {number}
 */
var dfs = (M, visited,i) => {
  for (var j = 0; j < M.length; j++) {
    if (M[i][j] == 1 && !visited[j]) {
      visited[j] = 1;
      dfs(M, visited, j);
    }
  }
};
var findCircleNum = function(M) {
  var visited = {};
  var count = 0;
  for (var i = 0; i < M.length; i++) {
    if (!visited[i]) {
      dfs(M, visited, i);
      count++;
    }
  }
  return count;
};

console.log(findCircleNum([[1,1,0],
 [1,1,0],
 [0,0,1]]))
console.log(findCircleNum([[1,1,0],
 [1,1,1],
 [0,1,1]]))
