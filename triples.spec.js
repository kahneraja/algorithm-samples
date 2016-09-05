var assert = require("assert");
var App = require("./triplets.js");

describe("triplets", function() {
  describe("compare", function() {
    it("1 1", function() {
      var app = new App();
      var a = [5,6,7];
      var b = [3,6,10];
      var result = app.compare(a, b);
      assert.equal("1 1", result.join(" "));
    });
    it("0 0", function() {
      var app = new App();
      var a = [1,1,1];
      var b = [1,1,1];
      var result = app.compare(a, b);
      assert.equal("0 0", result.join(" "));
    });
  });
});
