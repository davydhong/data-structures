class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }
  push(value) {
    this.storage[this.index] = value;
    this.index++
  }

  pop() {
    this.index--;
    var popPair = this.storage[this.index];
    if (this.index >= 0) {
      delete this.storage[this.index];
      return popPair;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  };
}
// class Giraffe {
//   constructor(name, height) {
//     this.name = name;
//     this.height = height;
//     this.hunger = 10;
//   }

//   isTallEnough(treeHeight) {
//     return this.height > treeHeight;
//   }

//   isHungry() {
//     return this.hunger > 0;
//   }

//   say(option) {
//     var sentences = {
//       'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
//       'notHungry': this.name + ' is not hungry.',
//       'notTallEnough': this.name + ' is too short to reach the trees.',
//       'ate': 'That was delicious!'
//     };

//     return console.log(sentences[option]);
//   }

//   eat() {
//     if (this.isHungry()) {
//       this.hunger -= this.height;
//       this.say('ate');
//     } else {
//       this.say('notHungry');
//     }
//   }

//   browse() {
//     if (this.isTallEnough(2)) {
//       this.eat();
//     } else {
//       this.say('notTallEnough')
//     }
//   }
// }