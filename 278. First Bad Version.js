/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    var start = 1;
    var end = n;
    var mid = Math.floor((start + end) / 2);
    if (isBadVersion(1)) return 1;
    while (start < end) {
      var midBad = isBadVersion(mid);
      var afterBad = isBadVersion(mid + 1);
      if (midBad) {
        end = mid;
      } else if (!afterBad) {
        start = mid;
        if (start === n - 1) return null;
      } else {
        return mid + 1;
      }
      mid = Math.floor((start + end) / 2);
    }
    return null;
  };
};

var isBadVersion = function(n) {
  if (n > 10) return true;
  return false;
}

console.log(solution(isBadVersion)(10));

