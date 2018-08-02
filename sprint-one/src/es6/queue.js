class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }
  enqueue(value) {
    this.storage[this.index] = value;
    this.index++
  };

  dequeue() {
    var tempIndex = Object.keys(this.storage)[0];
    var popPair = this.storage[tempIndex];
    if (Object.keys(this.storage).length >= 0) {
      delete this.storage[tempIndex];
      return popPair;
    }
  };

  size() {
    return Object.keys(this.storage).length;
  };


}