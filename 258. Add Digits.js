/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
    return num;
  }
  var result = 0;
  while (num) {
    var last = num % 10;
    result += last;
    num = (num - last) / 10;
  }
  return addDigits(result);
};


console.log(addDigits(38));
