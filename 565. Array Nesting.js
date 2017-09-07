/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  var set = new Set();
  var max = 0;
  for (var i = 0; i < nums.length; i++) {
    if (set.has(i)) continue;
    var start = i;
    var next = nums[i];
    var count = 1;
    set.add(i);
    while (next !== start) {
      count++;
      set.add(next);
      next = nums[next];
    }
    max = Math.max(count, max);
  }
  return max;
};

console.log(arrayNesting([5,4,0,3,1,6,2]));
console.log(arrayNesting([1,3,4,0,2]));
