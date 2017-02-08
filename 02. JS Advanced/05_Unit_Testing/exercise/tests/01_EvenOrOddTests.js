let expect = require('chai').expect;
let isOddOrEven = require('../01_Even_Or_Odd').isOddOrEven;

describe("isOddOrEven() - check, is the string length is odd or even", function() {
    it("should return undefined for 2", () => {
        expect(isOddOrEven(2)).to.equal(undefined, 'function did not return correct result');
    });

    it("should return undefined for {name: 'Pesho'}", () => {
        expect(isOddOrEven({name: 'Pesho'})).to.equal(undefined, 'function did not return correct result');
    });

    it("should return odd for pesho", () => {
        expect(isOddOrEven('pesho')).equal('odd', 'function did not return correct result');
    });

    it("should return even for ivan", () => {
        expect(isOddOrEven('roar')).equal('even', 'function did not return correct result');
    });

    it("should return odd for {cat}", () => {
        expect(isOddOrEven('cat')).equal('odd', 'function did not return correct result');
        expect(isOddOrEven('alabala')).equal('odd', 'function did not return correct result');
        expect(isOddOrEven('is it even')).equal('even', 'function did not return correct result');
    });
});