var assert = require("assert");
var Apple = require("./apple.js");

describe("Fruit", function() {
  describe("Apple", function() {
    it("should be either red or green", function() {
      var apple = new Apple();
      assert.equal("red", apple.color);
    });
    it("should change colour", function() {
      var apple = new Apple();
      apple.updateColor("blue");
      assert.equal("blue", apple.color);
    });
  });
});
