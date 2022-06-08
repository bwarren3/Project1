var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const Pile = lego.LegoPile;
const BST = bst.BST;

describe("LegoPile", function() {
    var pile = new LegoPile();
    var sampleLego = new Brick(5, "Red");
    pile.insert(sampleLego);

    it('checking Brick within LegoPile', function() {
      assert.equal(sampleLego, pile.dictionary['Red'].root.show());
    });
});
