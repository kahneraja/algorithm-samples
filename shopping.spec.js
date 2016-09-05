var assert = require('assert');
var Shopping = require('./shopping.js');
var shopping = new Shopping();


describe('Shortest path to all fish and home.', function() {
  it('Should parse centres', function() {
    var shopping = new Shopping();
    var input = `5 5 5
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
    var district = shopping.parseShoppingData(input);
    assert.equal(5, district.centres.length);
    assert.equal(4, district.centres[1].products.length);
    assert.equal(4, district.centres[0].roads.length);

  });

  it('Should find fastest route for one person in 2 minutes', function() {
    var shopping = new Shopping();
    var input = `5 5 5
1 1
4 15 23 3 455
1 3
1 4
1 5
1 2 10
1 3 10
1 4 10
2 4 10
3 5 10
4 5 10`;
    var district = shopping.parseShoppingData(input);
    assert.equal(5, district.centres.length);
    assert.equal(4, district.centres[1].products.length);
    assert.equal(3, district.centres[0].roads.length);
    assert.equal(2, district.centres[0].distanceTo(5));
  });
});
