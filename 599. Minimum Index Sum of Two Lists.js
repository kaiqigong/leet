/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  var resmap = {};
  var distance = list1.length + list2.length;
  var result = [list1[0]];
  for (var i = 0; i < list1.length; i++) {
    resmap[list1[i]] = i;
  }
  for (var i = 0; i < list2.length; i++) {
    if (resmap[list2[i]] > -1) {
      if (distance > resmap[list2[i]] + i) {
        distance = resmap[list2[i]] + i;
        result = [list2[i]];
      } else if (distance === resmap[list2[i]] + i) {
        result.push(list2[i]);
      }
    }
  }
  return result;
};


console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Burger King","Tapioca Express","Shogun"]));
