var assert = require("assert");
var DFS = require("./graph-dfs-pre-order.js");
var graphOneNode = require("./graph-one-node.json");
var graphThreeChildNodes = require("./graph-three-tree.json");
var graphNineTree = require("./graph-nine-tree.json");

describe("graph-dfs", function() {
  describe("traverse", function() {

    it("recursive 1", function() {
      var dfs = new DFS();
      assert.equal(1, dfs.traverse(graphOneNode));
    });

    it("recursive 4", function() {
      var dfs = new DFS();
      assert.equal(4, dfs.traverse(graphThreeChildNodes));
    });

    it("recursive 9", function() {
      var dfs = new DFS();
      assert.equal(9, dfs.traverse(graphNineTree));
    });

    it("print tree", function() {
      var dfs = new DFS();
      dfs.print(graphNineTree, 0);
    });

  });
});
