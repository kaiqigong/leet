/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  var results = [];
  findNums.forEach((num) => {
    var index = nums.indexOf(num);
    var biggers = nums.slice(index + 1).filter(x => x > num);
    if (biggers.length) {
      results.push(biggers[0]);
    } else {
      results.push(-1);
    }
  });
  return results;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
