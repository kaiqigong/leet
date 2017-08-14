/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (var index1 = 0; index1 < numbers.length - 1; index1++) {
    for (var index2 = index1 + 1; index2 < numbers.length; index2++) {
      if (numbers[index1] + numbers[index2] === target) {
        return [index1 + 1, index2 + 1];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
