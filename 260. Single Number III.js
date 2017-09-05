/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var diff = 0;
  for (var num of nums) {
      diff ^= num;
  }
  // Get its last set bit
  diff &= -diff;

  // Pass 2 :
  var rets = [0, 0]; // this array stores the two numbers we will return
  for (var num of nums) {
    if ((num & diff) == 0) { // the bit is not set
      rets[0] ^= num;
    }
    else { // the bit is set
      rets[1] ^= num;
    }
  }
  return rets;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
