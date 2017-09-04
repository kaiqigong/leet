/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  var params1 = a.substr(0, a.length - 1).split('+').map(x => ~~x);
  var params2 = b.substr(0, b.length - 1).split('+').map(x => ~~x);
  return `${params1[0] * params2[0] - params1[1] * params2[1]}+${params1[0] * params2[1] + params1[1] * params2[0]}i`
};

console.log(complexNumberMultiply('1+1i', '1+1i'))
console.log(complexNumberMultiply('1+-1i', '1+-1i'))
