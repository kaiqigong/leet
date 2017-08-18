/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  var hexes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', '0']
  var results = [];
  if (num > 0) {
    while (num) {
      results.unshift(hexes[num % 16]);
      num = num / 16 | 0;
    }
    return results.join('')
  } else if (num === 0) {
    return '0'
  } else {
    num = -num - 1;
    while (num) {
      results.unshift(hexes[15 - num % 16]);
      num = num / 16 | 0;
    }
    return ('ffffffff' + results.join('')).substr(-8);
  }
};

console.log(toHex(26));
console.log(toHex(-1));
console.log(toHex(-26));
