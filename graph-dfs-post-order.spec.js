var assert = require("assert");
var DFS = require("./graph-dfs-post-order.js");
var graphNineTree = require("./graph-nine-tree.json");
var graphCalcTree = require("./graph-calc-tree.json");

describe("graph-dfs-post-order", function() {
  describe("traverse", function() {

    it("print tree", function() {
      var dfs = new DFS();
      dfs.print(graphNineTree, 0);
    });

    it("run calculation", function() {
      var dfs = new DFS();
      var result = dfs.calculate(graphCalcTree, 0);
      assert.equal(1, result);
    });

  });
});
