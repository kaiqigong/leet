/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var binarySearch = function(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  var mid;
  while (end - start > 1) {
    mid = Math.ceil((start + end) / 2);
    if (target > arr[mid]) {
      start = mid;
    } else if (target === arr[mid]) {
      return mid;
    } else {
      end = mid;
    }
  }
  return end;
}
var findRadius = function(houses, heaters) {
  heaters.sort((x, y) => x - y);
  var result = Number.MIN_VALUE;
  for (var house of houses) {
    var index = binarySearch(heaters, house);
    var dist = heaters[index] - house > 0 ? heaters[index] - house : house - heaters[index];
    var dist2 = index === 0 ? Number.MAX_VALUE : house - heaters[index - 1];
    result = Math.max(result, Math.min(dist, dist2));
  }
  return result;
}

console.log(findRadius([1,2,3],[2]))
console.log(findRadius([1,2,3,4], [1,4]))
console.log(findRadius([1,2,3,4,9], [1,4]))
console.log(findRadius([1,5], [10]));
console.log(findRadius([617819336,399125485,156091745,356425228], [585640194,937186357]));
