module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

function Brick(size, color) {
  this.size = size;
  this.color = color;
}

function LegoPile() {
  this.dictionary = {
    "red": new BST(),
    "green": new BST(),
    "blue": new BST(),
    "yellow": new BST(),
    "black": new BST(),
    "white": new BST(),
  }
  this.insert = insert;
  this.hasBrick = hasBrick(size, color);
}

function insert(Brick) {
  this.dictionary[Brick.color].insert(Brick);
}

function hasBrick(size, color) {
   var current = this.root;
   while (current.color && current.size != size && color) {
      if (size < current.size) {
         current = current.left;
      }
      else {
         current = current.right;
      }
   }
   return current;
}
