/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  var bitCount = function(i) {
    i = i - ((i >> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >> 2) & 0x33333333);
    return (((i + (i >> 4)) & 0x0F0F0F0F) * 0x01010101) >> 24;
  }
  var results = [];
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 60; j++) {
      if ((bitCount(i) + bitCount(j)) === num) {
        results.push('' + i + ':' + ~~(j / 10) + '' + j % 10);
      }
    }
  }
  return results;
};

console.log(readBinaryWatch(1));
console.log(readBinaryWatch(2));
