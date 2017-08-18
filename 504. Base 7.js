/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (!num) {
    return '0';
  }
  var result = '';
  var negative = false;
  if (num < 0) {
    negative = true;
    num = -num;
  }
  while (num) {
    result = num % 7 + result;
    num = (num - num % 7) / 7;
  }
  if (negative) {
    result = '-' + result;
  }
  return result;
};

// var convertToBase7 = function(num) {
//     if (num < 0) {
//         return '-' + (convertToBase7(-num))
//     }

//     if (num < 7) {
//         return num.toString()
//     }

//     return convertToBase7(num / 7 | 0) + num % 7
// };

console.log(convertToBase7(100))
console.log(convertToBase7(-8))
