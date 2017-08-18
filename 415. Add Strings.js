/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var len1 = num1.length;
  var len2 = num2.length;
  var len = Math.max(len1, len2);
  var digitsMap = {'0': 0,'1': 1,'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9, 'undefined': 0};
  var carry = 0;
  var results = [];
  for (var i = 0; i < len; i++) {
    var val = digitsMap[num1[len1 - i - 1]] + digitsMap[num2[len2 - i - 1]] + carry;
    if (val > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    results.unshift(val % 10);
  }
  if (carry) {
    results.unshift(1);
  }
  return results.join('');
};

console.log(addStrings('9333852702227987', '85731737104263'));
console.log(addStrings('1', '1'));
