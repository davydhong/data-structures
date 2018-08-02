var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function (value) {
    var nodeAdded = Node(value);
    if (list.head === null) {
      list.head = nodeAdded;
      list.tail = nodeAdded;
    }
    list.tail.next = nodeAdded;
    list.tail = nodeAdded;
  };

  list.removeHead = function () {

    var val = list.head.value;
    list.head = list.head.next;
    return val;

  };

  list.contains = function (target) {
    var startNode = list.head;
    var recur = function (node) {
      if (node.value === target) {
        return true;
      } else if (node.next !== null) {
        return recur(node.next);
      } else {
        return false;
      }
    };

    return recur(startNode);
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
var newList = LinkedList();
newList.addToTail(1);
newList.addToTail(3);
newList.addToTail(5);
newList.addToTail(7);
newList.addToTail(9);



console.log(newList);

/*
 * Complexity: What is the time complexity of the above functions?
 * linear
 */