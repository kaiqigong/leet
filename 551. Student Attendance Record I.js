/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  var absentCount = 0;
  var continuousLateCount = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absentCount++;
      continuousLateCount = 0;
    } else if (s[i] === 'L') {
      continuousLateCount++;
    } else {
      continuousLateCount = 0;
    }
    if (absentCount > 1 || continuousLateCount > 2) {
      return false;
    }
  }
  return true;
};

console.log(checkRecord('PPALLP')) // true
console.log(checkRecord('PPALLL')) // false
