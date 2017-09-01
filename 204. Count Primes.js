var memwatch = require('memwatch-next');
memwatch.on('leak', console.log);
memwatch.on('stats', console.log);
// var hd = new memwatch.HeapDiff();

// // do some things ...

// // Take the second snapshot and compute the diff
// var diff = hd.end();


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var notPrime = new Set();
  var count = 0;
  var upper = Math.sqrt(n);
  for (var i = 2; i < n; i++) {
    if (!notPrime.has(i)) {
      count++;
      if (i > upper) continue;
      for (var j = 2; i * j < n; j++) {
        notPrime.add(i * j);
      }
    }
  }
  return count;
};

console.log(countPrimes(150000))
