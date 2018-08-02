var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.index] = value;
  this.index++
};

Queue.prototype.dequeue = function () {
  var tempIndex = Object.keys(this.storage)[0];
  var popPair = this.storage[tempIndex];
  if (Object.keys(this.storage).length >= 0) {
    delete this.storage[tempIndex];
    return popPair;
  }
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};