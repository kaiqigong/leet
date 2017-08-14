/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  var mid = Math.floor(Math.sqrt(area));
  for (var i = mid; i >= 1; i--) {
    if (area % i === 0) {
      return [area / i, i];
    }
  }
};


console.log(constructRectangle(105));
