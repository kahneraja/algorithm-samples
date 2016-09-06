"use strict";
let assert = require("assert");
var TwoCities = require("./travelling-sales-man-two-cities.json");
var ThreeCities = require("./travelling-sales-man-three-cities.json");
var FourCities = require("./travelling-sales-man-four-cities.json");
var FiveCities = require("./travelling-sales-man-five-cities.json");
var SixCities = require("./travelling-sales-man-six-cities.json");
var TravellingSalesMan = require("./travelling-sales-man-brute-force.js");

describe("TravellingSalesMan", function() {

  it("TwoCities", function() {
    var travellingSalesMan = new TravellingSalesMan();
    var result = travellingSalesMan.go(TwoCities);
    assert.equal(result, 4);
  });

  it("ThreeCities", function() {
    var travellingSalesMan = new TravellingSalesMan();
    var result = travellingSalesMan.go(ThreeCities);
    assert.equal(result, 6);
  });

  it("FourCities", function() {
    var travellingSalesMan = new TravellingSalesMan();
    var result = travellingSalesMan.go(FourCities);
    assert.equal(result, 7);
  });

  it("FiveCities", function() {
    var travellingSalesMan = new TravellingSalesMan();
    var result = travellingSalesMan.go(FiveCities);
    assert.equal(result, 4);
  });

  it("SixCities", function() {
    var travellingSalesMan = new TravellingSalesMan();
    var result = travellingSalesMan.go(SixCities);
    assert.equal(result, 4);
  });
});
