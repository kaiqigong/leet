/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var closeMap = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  for (var i = 0; i < s.length; i++) {
    if ('({['.indexOf(s[i]) > -1) {
      stack.push(s[i]);
    } else {
      if (closeMap[s[i]] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('([)]'));
console.log(isValid('('));
console.log(isValid(')'));
