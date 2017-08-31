/**
 * @param {number[]} nums
 * @return {number}
 */
// var findUnsortedSubarray = function(nums) {
//   var sorted = nums.slice().sort((x, y) => x - y);
//   var start = 0;
//   var end = nums.length - 1;
//   while (start <= end) {
//     if (nums[start] !== sorted[start]) {
//       break;
//     }
//     start++;
//   }
//   while (start <= end) {
//     if (nums[end] !== sorted[end]) {
//       break;
//     }
//     end--;
//   }
//   return end - start + 1;
// };

var findUnsortedSubarray = function(nums) {
    var len = nums.length,
        beg = -1,
        end = -2,
        min = nums[len - 1],
        max = nums[0];
    for(var i = 0; i < len; i++){
        var before = nums[i],
            after = nums[len - 1 - i];
        max = Math.max(max, before);
        min = Math.min(min, after);
        if(before < max) end = i;
        if(after > min) beg = len - 1 - i;
    }
    return end - beg + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([1,2,3,4]))
