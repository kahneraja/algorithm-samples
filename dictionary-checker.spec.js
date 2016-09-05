"use strict";
let assert = require("assert");
let DictionaryChecker = require("./dictionary-checker.js");
let DictionaryRules = require("./dictionary-rules.json");

describe("dictionaryChecker", function() {
  describe("isWord", function() {
    it("A", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(true, dictionaryChecker.isWord(DictionaryRules, "A"));
    });

    it("AB", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(false, dictionaryChecker.isWord(DictionaryRules, "AB"));
    });

    it("B", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(false, dictionaryChecker.isWord(DictionaryRules, "B"));
    });

    it("BA", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(false, dictionaryChecker.isWord(DictionaryRules, "BA"));
    });

    it("BI", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(false, dictionaryChecker.isWord(DictionaryRules, "BI"));
    });

    it("BAR", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(true, dictionaryChecker.isWord(DictionaryRules, "BAR"));
    });

    it("BARK", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(true, dictionaryChecker.isWord(DictionaryRules, "BARK"));
    });

    it("BART", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(false, dictionaryChecker.isWord(DictionaryRules, "BART"));
    });

    it("CAT", function() {
      var dictionaryChecker = new DictionaryChecker();
      assert.equal(false, dictionaryChecker.isWord(DictionaryRules, "CAT"));
    });

  });
});
