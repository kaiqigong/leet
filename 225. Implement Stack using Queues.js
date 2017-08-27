/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this._queue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this._queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  var queue = [];
  while (this._queue.length > 1) {
    queue.push(this._queue.shift());
  }
  var result = this._queue.shift();
  this._queue = queue;
  return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  var queue = [];
  while (this._queue.length > 1) {
    queue.push(this._queue.shift());
  }
  var result = this._queue.shift();
  queue.push(result);
  this._queue = queue;
  return result;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this._queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.pop())
console.log(stack.top())
console.log(stack.empty())
