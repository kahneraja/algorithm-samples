"use strict";
var assert = require("assert");

function calculateMaxProfit(prices){
  let min = prices[0];
  for(let i = 1; i < prices.length; i++){
    let current = prices[i];
    console.log(min + ":" + current);
  }
  return 0;
}

describe("stock-sale", function() {
  describe("275", function() {
    // 2 - 46 = -44
    // 48 - 2* = 46
    // 44 - 2 = 42
    // 25 - 2 = 23
    //
    it("275", function() {
      var prices = [46,2,48,44,25,277,4,1,66];
      let maxProfit = calculateMaxProfit(prices);
      assert.equal(275, maxProfit);
    });

    it.skip("276", function() {
      var prices = [46,1,48,44,25,277,4,2,66];
      let maxProfit = calculateMaxProfit(prices);
      assert.equal(276, maxProfit);
    });

    it.skip("8", function() {
      var prices = [1,2,3,4,5,6,7,8,9];
      let maxProfit = calculateMaxProfit(prices);
      assert.equal(8, maxProfit);
    });

    it.skip("0", function() {
      var prices = [9,8,7,6,5,4,3,2,1];
      let maxProfit = calculateMaxProfit(prices);
      assert.equal(0, maxProfit);
    });

  });
});
