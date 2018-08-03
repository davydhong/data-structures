

var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null; 
  expand(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newChild = Tree(value);
  if (this.children === null) {
    this.children = [newChild];
  } else {
    this.children[this.children.length] = newChild;
  }
};

treeMethods.contains = function (target) {

  if (this.value === target) {
    return true;
  }

  if (this.children !== null) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  };
};

var expand = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}


//   var testTree = Tree(5);
//   testTree.addChild(1);
//   testTree.addChild(2);
//   testTree.addChild(3);
//   testTree.addChild(4);
//   testTree.children[0].addChild(5);
//   testTree.children[1].addChild(6);
//   testTree.children[2].addChild(7);
//   testTree.children[2].addChild(17);
//   testTree.children[0].children[0].addChild(15);
//   testTree.children[0].children[0].children[0].addChild(115);

  
// console.log( testTree.contains(115) );




/*
 * Complexity: What is the time complexity of the above functions?
 
  Response: Linear,  O(n)
*/