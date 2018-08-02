var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;

};

// Stack.protype = {};
// Stack.protype.push = function (value) {
//   this.storage[this.index] = value;
//   this.index++;
// };

// Stack.protype.pop = function () {
//   this.index--;
//   var popPair = this.storage[this.index];
//   if (this.index >= 0) {
//     delete this.storage[this.index];
//     return popPair;
//   }
// };

// Stack.protype.size = function () {
//   return Object.keys(this.storage).length;
// };



var stackMethods = {
  push: function (value) {
    this.storage[this.index] = value;
    this.index++;
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

