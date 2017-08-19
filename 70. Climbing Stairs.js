/**
 * @param {number} n
 * @return {number}
 */
var map = {};
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (!map[n]) {
    map[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return map[n];
};

// var climbStairs = function(n) {
//     if(n < 3) return n;
//     var arr=[];
//     arr[0]=1;
//     arr[1]=2;
//     for(var i=2; i<n; i++) {
//         arr[i]=arr[i-1]+arr[i-2];
//     }
//     return arr[n-1];
// };

console.log(climbStairs(2)); // 11 2
console.log(climbStairs(3)); // 111 12 21
console.log(climbStairs(4)); // 1111,112,121,211,22
console.log(climbStairs(5)); // 11111,1121,1211,2111,221, 1112, 122, 212,
console.log(climbStairs(44));
