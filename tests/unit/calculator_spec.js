var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add 2 numbers', function(){
    calculator.previousTotal = "1",
    calculator.add("4")
    assert.equal(5.0, calculator.runningTotal)
  });

  it('can subtract 2 numbers', function(){
    calculator.previousTotal = "4",
    calculator.subtract("2")
    assert.equal(2.0, calculator.runningTotal)
  });

  it('can multiply 2 numbers', function(){
    calculator.previousTotal = "4",
    calculator.multiply("2")
    assert.equal(8.0, calculator.runningTotal)
  });

  it('can divide 2 numbers', function(){
    calculator.previousTotal = "4",
    calculator.divide("2")
    assert.equal(2.0, calculator.runningTotal)
  });

  it('concatenate multiple number button clicks', function(){
    calculator.numberClick(1),
    calculator.numberClick(1),
    calculator.numberClick(2),
    assert.equal(112.0, calculator.runningTotal)
  });

  it('chain multiple operations together', function(){
    calculator.previousTotal= "1",
    calculator.add(3),
    calculator.previousTotal = calculator.runningTotal
    calculator.add(4),
    assert.equal(8.0, calculator.runningTotal)
  });

  it('clear the running total without affecting the calculation', function(){
    calculator.previousTotal= "10",
    calculator.add(3),
    calculator.clearClick()
    calculator.add(4),
    assert.equal(14.0, calculator.runningTotal)
  });




});
