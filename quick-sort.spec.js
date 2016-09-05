var assert = require("assert");
var QuickSort = require("./quick-sort.js");

describe("QuickSort", function() {

  it("sort", function() {
    var quickSort = new QuickSort();
    var sortedArray = quickSort.sort([5,4,1,8,7,2,6,3]);
    console.log(sortedArray);
    assert.equal([1,2,3,4,5,6,7,8].toString(), sortedArray.toString());
  });

  it("merge", function() {
    var quickSort = new QuickSort();
    var result = quickSort.merge([1,4,6,8], [2,3,5,7]);
    console.log(result);
    assert.equal([1,2,3,4,5,6,7,8].toString(), result.toString());
  });

  it("merge", function() {
    var quickSort = new QuickSort();
    var result = quickSort.merge([1], [2,3,4,5,6,7,8]);
    console.log(result);
    assert.equal([1,2,3,4,5,6,7,8].toString(), result.toString());
  });

  it("merge", function() {
    var quickSort = new QuickSort();
    var result = quickSort.merge([1,2,3,4,5,6,7], [8]);
    console.log(result);
    assert.equal([1,2,3,4,5,6,7,8].toString(), result.toString());
  });

});
