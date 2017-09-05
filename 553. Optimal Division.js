/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  var result = '';
  if (nums.length === 1) {
    result = `${nums[0]}`;
  } else if (nums.length === 2) {
    result = `${nums[0]}/${nums[1]}`
  } else {
    var dv1 = nums.pop();
    result = `${dv1}`
    while(nums.length > 1) {
      var dv = nums.pop();
      result = `${dv}/${result}`;
    }
    result = nums.pop() + '/(' + result + ')';
  }
  return result;
};

console.log(optimalDivision([1000]));
console.log(optimalDivision([1000,100]));
console.log(optimalDivision([1000,100,10]));
console.log(optimalDivision([1000,100,10,2]));
console.log(optimalDivision([1000,100,10,5,2]));
console.log(optimalDivision([1000,100,10,5,2,1]));
