var quickselect = function (nums, k, start, end) {
  var l = start, r = end, pivot = nums[Math.floor((l+r)/2)];
  while (l<=r) {
    while (nums[l] < pivot) l++;
    while (nums[r] > pivot) r--;
    if (l>=r) break;
    swap(nums, l++, r--);
  }
  if (l-start+1 > k) return quickselect(nums, k, start, l-1);
  if (l-start+1 == k && l==r) return nums[l];
  return quickselect(nums, k-r+start-1, r+1, end);
};

var swap = function(nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  var sum = 0, median = quickselect(nums, Math.floor(nums.length / 2) + 1, 0, nums.length-1);
  for (var i = 0; i < nums.length; i++) sum += Math.abs(nums[i] - median);
  return sum;
};

console.log(minMoves2([1,2,3]))
