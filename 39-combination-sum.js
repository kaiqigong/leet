/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
  candidates = candidates.sort();
  if (target < candidates[0]) {
    return [];
  }
  var combinations = {};
  combinations[0] = [[]];
  for (let candidate of candidates) {
    for (var i = candidate; i <= target; i++) {
      if (!combinations[i]) combinations[i] = [];
      if (combinations[i - candidate]) {
        for(let c of combinations[i - candidate]) {
          let comb = c.slice();
          comb.push(candidate);
          combinations[i].push(comb);
        }
      } else {
        combinations[i - candidate] = [];
      }
    }
  }
  return combinations[target];
};

