let createCalculator = require('../04_Add_Subtract').createCalculator;
let expect = require('Chai').expect;

let calculator;
beforeEach('Init a calculator instance', () => {
    calculator = createCalculator();
});

describe('Test calculator createCalculator()', () => {
    it('should be object, instance of calculator', () => {
        expect(calculator).to.be.an('object');
    });

    it('should have add, subtract, get functions', () => {
        expect(calculator.hasOwnProperty('add')).to.be.true;
        expect(calculator.hasOwnProperty('subtract')).to.be.true;
        expect(calculator.hasOwnProperty('get')).to.be.true;
    });

    it('should return 0 on get on empty calculator', () => {
        expect(calculator.get()).to.equal(0);
    });

    it('should return 5 on {add 5, get}', () => {
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    });

    it("should return 2 after {add 3; subtract '7'; add '-2' subtract -1}", () => {
        calculator.add(10);
        calculator.subtract("7");
        calculator.add("-2");
        calculator.subtract(-1);
        let value = calculator.get();
        expect(value).to.be.equal(2);
    });

    it('should return -5 on {subtract 5, get}', () => {
        calculator.subtract(5);
        expect(calculator.get()).to.equal(-5);
    });
});
