var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[value] = value;
  };

  someInstance.dequeue = function () {
    var tempIndex=Object.keys(storage)[0];
    var popPair = storage[tempIndex];
    if (Object.keys(storage).length >= 0){
      delete storage[tempIndex];
      return popPair;
    }
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};