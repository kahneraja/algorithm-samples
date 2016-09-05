var assert = require('assert');

function calculateMatchingMinDistance(items){
  var minDistance = -1;
  items.forEach(function(item, index){
    const nextIndex = items.indexOf(item, index + 1);
    const distance = nextIndex - index;
    if (minDistance === -1 && distance > 0)
      minDistance = distance;
    else if (minDistance >= 0 && distance > 0 && distance < minDistance)
      minDistance = distance;
  })
  return minDistance;
}

describe('Array item matching min distance', function() {
  it('[] should be -1.', function() {
    var items = [];
    assert.equal(-1, calculateMatchingMinDistance(items));
  });

  it('[1] should be -1.', function() {
    var items = [1];
    assert.equal(-1, calculateMatchingMinDistance(items));
  });

  it('[1,1] should be 1.', function() {
    var items = [1,1];
    assert.equal(1, calculateMatchingMinDistance(items));
  });

  it('[1,0,0,1] should be 1.', function() {
    var items = [1,2,2,1];
    assert.equal(1, calculateMatchingMinDistance(items));
  });

  it('[1,0,1] should be 2.', function() {
    var items = [1,0,1];
    assert.equal(2, calculateMatchingMinDistance(items));
  });

  it('[1,2,1,2] should be 2.', function() {
    var items = [1,2,1,2];
    assert.equal(2, calculateMatchingMinDistance(items));
  });

  it('[1,2,3,1,2,3] should be 3.', function() {
    var items = [1,2,3,1,2,3];
    assert.equal(3, calculateMatchingMinDistance(items));
  });

  it('should be 3.', function() {
    var items = [7,1,3,4,1,7];
    assert.equal(3, calculateMatchingMinDistance(items));
  });

  it('should be 3.', function() {
    var items = [1,2,3,4,1];
    assert.equal(4, calculateMatchingMinDistance(items));
  });

});
