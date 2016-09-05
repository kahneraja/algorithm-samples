var assert = require('assert');

function camelCaseCalculator(input){
  return input.split(/(?=[A-Z])/).length;
}

describe('Camel case word calculator', function() {

  it('should be 1 for "a"', function() {
    assert.equal(1, camelCaseCalculator('a'));
  });

  it('should be 2 for "aA"', function() {
    assert.equal(2, camelCaseCalculator('aA'));
  });

  it('should be 1 for "hello"', function() {
    assert.equal(1, camelCaseCalculator('hello'));
  });

  it('should be 2 for "helloWorld"', function() {
    assert.equal(2, camelCaseCalculator('helloWorld'));
  });

  it('should be 3 for "helloWorldToday"', function() {
    assert.equal(3, camelCaseCalculator('helloWorldToday'));
  });

});
