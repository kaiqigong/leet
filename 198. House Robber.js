var memwatch = require('memwatch-next');
/**
 * @param {number[]} nums
 * @return {number}
 */
memwatch.on('leak', console.log);
memwatch.on('stats', console.log);

var rob = function(nums) {
  var n = nums.length;
  var combinations;
  var max0 = 0;
  var max1 = 0;
  var c0;
  var c1;
  var build = function(len) {
    if (len === 0) {
      combinations = [[]];
    } else if (len === 1) {
      max1 = nums[0];
      combinations = [[0], [1]];
    } else if (len === 2) {
      max1 = nums[1];
      max0 = nums[0];
      combinations = [[0, 1], [1, 0]];
    } else {
      build(len - 1);
      for (var i = 0, l = combinations.length; i < l; i++) {
        var combination = combinations[i];
        if (combination[len - 2]) {
          combination.push(0);
        } else if (combination[len - 2] === 0 && combination[len - 3] === 0) {
          combination.push(1);
        } else {
          if (len !== n) {
            var toAdd = combination.slice();
            toAdd.push(0);
            combinations.push(toAdd);
          }
          combination.push(1);
        }
      }
      max0 = 0;
      max1 = 0;
      for (var combination of combinations) {
        var sum = 0;
        for (var i = 0; i < combination.length; i++) {
          if (combination[i]) {
            sum += nums[i];
          }
        }
        if (combination[i - 1]) {
          if (max1 <= sum) {
            max1 = sum;
            c1 = combination;
          }
        } else {
          if (max0 <= sum) {
            max0 = sum;
            c0 = combination;
          }
        }
      }
      combinations = [c0, c1];
    }
  };
  build(nums.length);
  return Math.max(max0, max1);
};

// holy shit
// var rob = function(nums){
//   var prevMax = 0;
//   var currMax = 0;
//   for (var i = 0; i < nums.length; i++){
//     var temp = currMax;
//     currMax = Math.max(prevMax + nums[i], currMax );
//     prevMax = temp;
//   }
//   return currMax;
// }

console.log(rob([2, 3, 1, 4, 5, 3, 3, 6])) // 6 5 3;3,4,3,6

console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]));

console.log(rob([4,1,2,7,5,3,1])); // 4,7,3

console.log(rob([114,117,207,117,235,82,90,67,143,146,53,108,200,91,80,223,58,170,110,236,81,90,222,160,165,195,187,199,114,235,197,187,69,129,64,214,228,78,188,67,205,94,205,169,241,202,144,240]));

console.log(rob([1])); // 4,7,3

console.log(rob([1, 3])); // 4,7,3

console.log(rob([3, 1])); // 4,7,3
