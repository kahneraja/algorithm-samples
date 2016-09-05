var assert = require("assert");
var App = require("./pairs.js");

describe("pairs", function() {
  describe("combinations", function() {
    
    it("5", function() {
      var app = new App();
      var divider = 3;
      var items = [1,3,2,6,1,2];

      var result = app.findPairs(items, divider);
      assert.equal(5, result);
    });

    it("1", function() {
      var app = new App();
      var divider = 2;
      var items = [1,3];

      var result = app.findPairs(items, divider);
      assert.equal(1, result);
    });

    it("216", function() {
      var app = new App();
      var divider = 22;
      var items = [43,95,51,55,40,86,65,81,51,20,47,50,65,53,23,78,75,75,47,73,25,27,14,8,26,58,95,28,3,23,48,69,26,3,73,52,34,7,40,33,56,98,71,29,70,71,28,12,18,49,19,25,2,18,15,41,51,42,46,19,98,56,54,98,72,25,16,49,34,99,48,93,64,44,50,91,44,17,63,27,3,65,75,19,68,30,43,37,72,54,82,92,37,52,72,62,3,88,82,71];
      var result = app.findPairs(items, divider);
      assert.equal(216, result);
    });

    it("254", function() {
      var app = new App();
      var divider = 21;
      var items = [64,95,76,35,83,2,97,21,26,6,20,98,100,79,84,40,62,62,20,9,87,40,47,38,12,10,92,68,4,34,98,53,15,4,9,4,77,60,36,49,10,73,56,43,31,6,18,91,53,73,28,90,79,3,72,64,29,89,95,28,23,7,54,23,34,90,100,73,77,98,95,89,22,42,98,39,92,25,44,40,7,100,62,28,25,21,64,55,84,54,99,14,5,51,34,66,4,5,49,56];
      var result = app.findPairs(items, divider);
      assert.equal(254, result);
    });

  });
});
