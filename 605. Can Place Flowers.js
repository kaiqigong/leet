/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  var count = 0;
  for (var i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      count++;
    }
    if (count >= n) {
      return true;
    }
  }
  return false;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));
console.log(canPlaceFlowers([1], 1));
console.log(canPlaceFlowers([0], 1));
console.log(canPlaceFlowers([], 1));
