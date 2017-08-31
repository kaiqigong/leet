/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._arr = [];
  this._min = Number.MAX_VALUE;
  this._mins = [this._min];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._min = Math.min(x, this._min);
  this._mins.push(this._min);
  this._arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._mins.pop();
  this._min = this._mins[this._mins.length - 1];
  var result = this._arr[this._arr.length - 1];
  this._arr.pop();
  return result;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._arr[this._arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
