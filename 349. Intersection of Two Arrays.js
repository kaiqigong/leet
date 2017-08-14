/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var set = new Set();
  var set1 = new Set(nums1);
  var set2 = new Set(nums2);
  set2.forEach(function(value) {
    if (set1.has(value)) {
      set.add(value);
    }
  });
  return Array.from(set);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
