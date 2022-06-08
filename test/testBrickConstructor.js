var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe("Brick", function() {
    var sampleLego = new Brick(5, "Red");

    it('checking Brick constructor', function() {
      assert.equal(sampleLego.size, 5);
    });

    it('checking Brick constructor', function() {
      assert.equal(sampleLego.color, "Red");
    });
});
