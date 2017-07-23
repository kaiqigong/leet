/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  if (bank.indexOf(end) < 0) {
    return -1
  }
  if (!canMutate(start, end)) {
    var possibles = [];
    for (var i = 0; i < bank.length; i++) {
      if (canMutate(start, bank[i])) {
        var sliced = bank.slice();
        sliced.splice(i, 1);
        var mutations = minMutation(bank[i], end, sliced);
        if (mutations !== -1) {
          possibles.push(mutations);
        }
      }
    }
    if (possibles.length > 0) {
      return Math.min.apply(null, possibles) + 1;
    } else {
      return -1;
    }
  } else {
    return 1;
  }
};

var canMutate = function(start, end) {
  var count = 0;
  for (var i = 0; i < start.length; i++) {
    if (start[i] !== end[i]) count++;
  }
  return count === 1;
};
