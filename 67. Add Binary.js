/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var result = '';
  var add = false;
  var lenA = a.length;
  var lenB = b.length;
  var len = Math.max(a.length, b.length);
  for (var i = 0; i < len; i++) {
    if (a[lenA - i - 1] === '1' && b[lenB - i - 1] === '1') {
      if (add) {
        result = '1' + result;
      } else {
        result = '0' + result;
        add = true;
      }
    } else if (a[lenA - i - 1] === '1' || b[lenB - i - 1] === '1') {
      if (add) {
        result = '0' + result;
      } else {
        result = '1' + result;
      }
    } else {
      if (add) {
        result = '1' + result;
        add = false;
      } else {
        result = '0' + result;
      }
    }
  }
  if (add) {
    result = '1' + result;
  }
  return result;
};

console.log(addBinary('11', '1'));
console.log(addBinary('10', '1'));
console.log(addBinary('11', '11'));
