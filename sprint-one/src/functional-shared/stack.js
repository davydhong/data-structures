var Stack = function () {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.index] = value;
    this.index++
  },

  pop: function () {
    this.index--;
    var popPair = this.storage[this.index];
    if (this.index >= 0) {
      delete this.storage[this.index];
      return popPair;
    }
  },

  size: function () {
    return Object.keys(this.storage).length;
    // return index; 
  }
};

var extend = function (obj, methods) {
  for (key in methods) {
    obj[key] = methods[key];
  }
  // return obj;
}

var instance = Stack();
// console.log(Stack());