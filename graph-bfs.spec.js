var BFS = require("./graph-bfs.js");
var graphNineTree = require("./graph-nine-tree.json");

describe("graph-dfs", function() {

  it("print tree", function() {
    var dfs = new BFS();
    dfs.print(graphNineTree, 0);
  });

});
