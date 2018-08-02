var Queue = function () {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.index] = value;
    this.index++
  },

  dequeue: function () {
    var tempIndex = Object.keys(this.storage)[0];
    var popPair = this.storage[tempIndex];
    if (Object.keys(this.storage).length >= 0) {
      delete this.storage[tempIndex];
      return popPair;
    }
  },

  size: function () {
    return Object.keys(this.storage).length;
    // return index; 
  }
};