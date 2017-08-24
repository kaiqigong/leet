/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var m1 = {};
  var m2 = {};
  for (var i = 0; i < s.length; i++) {
    if (m1[s[i]] !== m2[t[i]]) return false;
    m1[s[i]] = i + 1;
    m2[t[i]] = i + 1;
  }
  return true;
};
