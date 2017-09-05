/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  var count = 0;
  var helper = (N, pos, used) => {
    if (pos > N) {
      count++;
      return;
    }
    for (var i = 1; i <= N; i++) {
      if (!used[i] && (i % pos == 0 || pos % i == 0)) {
        used[i] = 1;
        helper(N, pos + 1, used);
        used[i] = 0;
      }
    }
  }
  if (N == 0) return 0;
  helper(N, 1, []);
  return count;
};

console.log(countArrangement(2));
