var BinarySearchTree = function (value) {
  var BST = Object.create(BSTmethods);
  BST.value = value;
  BST.left = null;
  BST.right = null;

  return BST;
};

var BSTmethods = {};

BSTmethods.insert = function (newVal) {
  if (this.value < newVal) {
    if (this.right === null) {
      return this.right = BinarySearchTree(newVal);
    }
    this.right.insert(newVal);
  } else {
    if (this.left === null) {
      return this.left = BinarySearchTree(newVal);
    }
    this.left.insert(newVal);
  }
};

BSTmethods.contains = function (target) {
  debugger;
  if (this.value === target) {
    return true;
  }
  if (this.left !== null) {
    if (this.left.contains(target)) {
      return true;
    }
  }
  if (this.right !== null) {
    if (this.right.contains(target)) {
      return true;
    }
  }

  return false;

};


BSTmethods.depthFirstLog = function (cb) {

  this.value = cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n)
 * depthFirstLog: O(n)
 */
