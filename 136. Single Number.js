/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var result = 0;
  var obj = {};
  nums.forEach((num) => {
    if (!obj[num]) {
      obj[num] = 1;
      result += num;
    } else {
      result -= num;
    }
  });
  return result;
};

// var singleNumber = function(nums) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         result ^= nums[i];
//     }
//     return result;
// };

// [4,2,5,7,5,6,4,2,6]
console.log(singleNumber([4,2,5,7,5,6,4,2,6]));
