/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  var map = new Map();
  paths.forEach((path) => {
    var arr = path.split(' ');
    var directory = arr[0];
    var files = arr.slice(1, arr.length);
    files.forEach((file) => {
      var matches = /(.*?)\((.*?)\)/g.exec(file);
      var name = matches[1];
      var content = matches[2];
      if (!map.has(content)) {
        map.set(content, []);
      }
      map.get(content).push(`${directory}/${name}`);
    });
  });
  return Array.from(map.values()).filter(x => x.length > 1);
};

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]));
console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]));
