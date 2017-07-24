var parseLog = function(log) {
  var arr = log.split(':');
  var num = parseInt(arr[0]);
  var type = arr[1];
  var time = parseInt(arr[2]);
  return {num: num, type: type, time: time};
}

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  var fullTimes = [];
  var parent = {children: []};
  var roots = parent.children;
  for (var i = 0; i < logs.length; i++) {
    var log = parseLog(logs[i]);
    if (log.type === 'start') {
      var node = {start: log, children: [], parent: parent};
      roots.push(node);
      parent = node;
      roots = node.children;
    } else {
      parent = parent.parent;
      roots = parent.children;
      roots[roots.length - 1].end = log;
    }
  }
  var results = [];

  var travel = function (node) {
    var time = node.end.time - node.start.time + 1;
    var num = node.end.num;
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        time = time - (node.children[i].end.time - node.children[i].start.time + 1);
        travel(node.children[i]);
      }
    }
    if (results[num]) {
      results[num] += time;
    } else {
      results[num] = time;
    }
  }
  for (var i = 0; i < parent.children.length; i++) {
    travel(parent.children[i]);
  }
  return results;
};

