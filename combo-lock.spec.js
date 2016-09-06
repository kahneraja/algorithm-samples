"use strict";
let assert = require("assert");
var ComboLock = require("./combo-lock.js");

describe("ComboLock", function() {
  it("1 slots Should generate 10 combinations", function() {
    var comboLock = new ComboLock();
    var result = comboLock.try(1);
    assert.equal(result.length, 10);
  });

  it("2 slots Should generate 100 combinations", function() {
    var comboLock = new ComboLock();
    var result = comboLock.try(2);
    assert.equal(result.length, 100);
  });

  it("3 slots Should generate 1000 combinations", function() {
    var comboLock = new ComboLock();
    var result = comboLock.try(3);
    assert.equal(result.length, 1000);
  });

  it("4 slots Should generate 10000 combinations", function() {
    var comboLock = new ComboLock();
    var result = comboLock.try(4);
    assert.equal(result.length, 10000);
  });

});
