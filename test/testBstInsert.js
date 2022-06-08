var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe("Brick", function() {
    var rootLego = new Brick(5, "Red");
    var tree = new BST();
    tree.insert(rootLego);

    it('checking root node', function() {
      assert.equal(tree.root.data, rootLego);
    });

    it('checking left child of root node', function() {
      var firstLeftChildLego = new Brick(3, "Red");
      tree.insert(firstLeftChildLego);
      assert.equal(tree.root.left.data, firstLeftChildLego);
    });

    it('checking right child of root node', function() {
      var firstRightChildLego = new Brick(7, "Red");
      tree.insert(firstRightChildLego);
      assert.equal(tree.root.right.data, firstRightChildLego);
    })

    it('checking right child and left child of root node', function() {
      var sampleLego = new Brick(5, "Red");
      var treeSample = new BST();
      treeSample.insert(sampleLego);

      var firstRightChildLego = new Brick(8, "Red");
      treeSample.insert(firstRightChildLego);
      var firstLeftChildLego = new Brick(3, "Red");
      treeSample.insert(firstLeftChildLego);
      assert.equal(treeSample.root.right.data, firstRightChildLego);
      assert.equal(treeSample.root.left.data, firstLeftChildLego);
    })

    it('checking general case', function() {
      var sampleLego = new Brick(5, "Red");
      var sampleTree = new BST();
      sampleTree.insert(sampleLego);

      var firstRightChildLego = new Brick(8, "Red");
      sampleTree.insert(firstRightChildLego);
      var firstLeftChildLego = new Brick(3, "Red");
      sampleTree.insert(firstLeftChildLego);
      var sampleLegoOne = new Brick(9, "Red");
      sampleTree.insert(sampleLegoOne);
      var sampleLegoTwo = new Brick(12, "Red");
      sampleTree.insert(sampleLegoTwo);
      var sampleLegoThree = new Brick(10, "Red");
      sampleTree.insert(sampleLegoThree);
      var sampleLegoFour = new Brick(2, "Red");
      sampleTree.insert(sampleLegoFour);
      assert.equal(sampleTree.root.right.data, firstRightChildLego);
      assert.equal(sampleTree.root.left.data, firstLeftChildLego);
      assert.equal(sampleTree.root.right.right.data, sampleLegoOne);
      assert.equal(sampleTree.root.right.right.right.data, sampleLegoTwo);
      assert.equal(sampleTree.root.right.right.right.left.data, sampleLegoThree);
      assert.equal(sampleTree.root.left.left.data, sampleLegoFour);
    })
});
