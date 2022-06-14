var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const Pile = lego.LegoPile;
const BST = bst.BST;

describe("LegoPile", function() {
    var pile = new Pile();
    var sampleLego = new Brick(5, "red");
    pile.insert(sampleLego);

    it('checking Brick within LegoPile', function() {
      assert.equal(sampleLego, pile.dictionary["red"].root.show());
    });

    it('checking One Brick of Each Color within LegoPile', function() {
      var sampleLegoGreen = new Brick(5, "green");
      pile.insert(sampleLegoGreen);
      var sampleLegoBlue = new Brick(5, "blue");
      pile.insert(sampleLegoBlue);
      var sampleLegoYellow = new Brick(5, "yellow");
      pile.insert(sampleLegoYellow);
      var sampleLegoBlack = new Brick(5, "black");
      pile.insert(sampleLegoBlack);
      var sampleLegoWhite = new Brick(5, "white");
      pile.insert(sampleLegoWhite);
      assert.equal(sampleLego, pile.dictionary["red"].root.show());
      assert.equal(sampleLegoGreen, pile.dictionary["green"].root.show());
      assert.equal(sampleLegoBlue, pile.dictionary["blue"].root.show());
      assert.equal(sampleLegoYellow, pile.dictionary["yellow"].root.show());
      assert.equal(sampleLegoBlack, pile.dictionary["black"].root.show());
      assert.equal(sampleLegoWhite, pile.dictionary["white"].root.show());
    });
    it('checking Multiple Bricks of One Color within LegoPile', function() {
      var sampleLegoTwo = new Brick(5, "red");
      pile.insert(sampleLegoTwo);
      var sampleLegoThree = new Brick(5, "red");
      pile.insert(sampleLegoThree);
      var sampleLegoFour = new Brick(5, "red");
      pile.insert(sampleLegoFour);
      assert.equal(sampleLego, pile.dictionary["red"].root.show());
      assert.equal(sampleLegoTwo, pile.dictionary["red"].root.right.show());
      assert.equal(sampleLegoThree, pile.dictionary["red"].root.right.right.show());
      assert.equal(sampleLegoFour, pile.dictionary["red"].root.right.right.right.show());
    });
});
