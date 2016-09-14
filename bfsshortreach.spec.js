"use strict";
var assert = require("assert");
var BFSShortReach = require("./bfsshortreach.js");

describe("bfsshortreach", function() {

  it("should have two queries.", function() {
    let input = `2
4 2
1 2
1 3
1
3 1
2 3
2`;

    const bfsShortReach = new BFSShortReach();
    const queries = bfsShortReach.parse(input);
    console.log(queries);
    assert.equal(2,queries.length);
  });


});
