

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    this._storage.get(index).push([k, v]);
  }

};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;

  this._storage.get(index).forEach(function (arr) {
    if (arr[0] === k) {
      result = arr[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var deleted;
  this._storage.set(index, this._storage.get(index).filter(function (element) {
    if (element[0] === k) {
      deleted = element[1];
    }
    return element[0] !== k;
  }));
  return deleted;
};

// a = [1,2,3,4,5];
// for (var i = 0 ;)


// var HT = new HashTable('height', 5);
// HT.retrieve('height');

/*
 * Complexity: What is the time complexity of the above functions?
 */


