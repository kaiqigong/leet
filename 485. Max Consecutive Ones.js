/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var result = 0;
  var tmp = 0;
  nums.push(0);
  nums.forEach(num => {
    if (num === 1) {
      tmp++;
    } else {
      result = Math.max(result, tmp);
      tmp = 0;
    }
  });
  return result;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
