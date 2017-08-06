/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var result = ~num;
  var tmp = 0;
  while (num) {
    num >>= 1;
    tmp <<= 1;
    tmp++;
  }
  return result & tmp;
};

console.log(findComplement(5));
