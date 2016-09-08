const assert = require("assert");
const Shopping = require("./shopping.js");

describe("Shortest path to all fish and home.", function() {
  it("Should parse centres", function() {
    const shopping = new Shopping();
    const input = `5 5 5
1 1
4 15 23 3 455
1 3
1 4
1 5
1 2 10
1 3 10
1 4 10
1 5 30
2 4 10
3 5 10
4 5 10`;
    const district = shopping.parseShoppingData(input);
    assert.equal(5, district.centres.length);
    assert.equal(4, district.centres[1].products.length);
    assert.equal(4, district.centres[0].roads.length);

  });

  it("Cities should have correct number of roads.", function() {
    const shopping = new Shopping();
    const input = `5 6 5
1 1
1 2
1 3
1 4
1 5
1 2 10
1 3 10
2 4 10
3 5 10
4 5 10
5 1 10`;
    const district = shopping.parseShoppingData(input);
    assert.equal(3, district.centres[0].roads.length);
  });

  it("First city should have a road to 1,2.", function() {
    const shopping = new Shopping();
    const input = `5 6 5
1 1
1 2
1 3
1 4
1 5
1 2 10
1 3 10
2 4 10
3 5 10
4 5 10
5 1 10`;
    const district = shopping.parseShoppingData(input);
    assert.equal(1, district.centres[0].roads[0].end);
    assert.equal(2, district.centres[0].roads[1].end);
  });

  it("Default distance to 5 should be 40.", function() {
    const shopping = new Shopping();
    const input = `5 5 5
1 1
1 2
1 3
1 4
1 5
1 2 10
1 3 10
2 4 10
3 5 10
4 5 10`;
    const district = shopping.parseShoppingData(input);
    const distance = shopping.visitAll(district, district.centres[0]);
    assert.equal(20, distance);
  });

  it("Should graph.", function() {
    const shopping = new Shopping();
    const input = `5 5 5
1 1
1 2
1 3
1 4
1 5
1 2 10
1 3 10
2 4 10
3 5 10
4 5 10`;
    const district = shopping.parseShoppingData(input);
    const start = district.centres[0];
    const node = {
      id: start.id,
      distance: 0,
      nodes: []
    };
    node.nodes = shopping.graph(district, district.centres[0], 0, []);
    shopping.print(node,0);
  });

});
