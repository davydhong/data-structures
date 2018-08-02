var Stack = function () {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++
}

Stack.prototype.pop = function () {
  this.index--;
  var popPair = this.storage[this.index];
  if (this.index >= 0) {
    delete this.storage[this.index];
    return popPair;
  }
}

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};