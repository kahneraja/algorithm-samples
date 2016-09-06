"use strict";
let assert = require("assert");
var Knapsack = require("./knapsack.js");
var knapsackItems = require("./knapsack.json");

describe("Knapsack", function() {

  it("pack 'C,A'", function() {
    var knapsack = new Knapsack();
    var result = knapsack.pack(knapsackItems, 5);
    assert.equal(["C", "A"].toString(), result.toString());
  });

});
