/**
 * @param {number} n
 * @return {number}
 */
// var findNthDigit = function(n) {
//   var num = 1;
//   var index = 0;
//   var str = '';
//   while(index < n) {
//     if (str[index] == undefined) {
//       str += num;
//       num++;
//     }
//     index++;
//   }
//   return parseInt(str[n - 1]);
// };

var findNthDigit = function(n) {
  var len = 1;
  var count = 9;
  var start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  start += (n - 1) / len;
  var s = start.toString();
  return parseInt(s[((n - 1) % len)]);
}

console.log(findNthDigit(11));
console.log(findNthDigit(1));
console.log(findNthDigit(3));
console.log(findNthDigit(10000));
console.log(findNthDigit(100000));
