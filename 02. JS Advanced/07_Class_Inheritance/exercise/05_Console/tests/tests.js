let expect = require('chai').expect;
let Console = require('../Console').Console;

describe('Console functionality tests', function () {
    it('should have method writeLine',() => {
        expect(typeof Console.writeLine).equal('function')
    });
    describe('With one argument tests', function () {
        it('if it is a string, the function should return it',() => {
            expect(Console.writeLine('string')).equal('string')
        });

        it('if it is a different from string, should return undefined',() => {
            expect(Console.writeLine(123)).equal(undefined);
        });

        it('if it is an object - return the JSON representation of the object.',() => {
            let obj = {name: 'Goshko'};
            expect(Console.writeLine(obj)).equal(JSON.stringify(obj));
        });
    });

    describe('With two arguments tests', function () {
        it('If first is not a string - should throw a TypeError',() => {
            expect(() => Console.writeLine(23, 2)).to.throw(TypeError)
        });

        it('If less parameters should throw a RangeError.',() => {
            expect(() => Console.writeLine('Test {0} {1}', 'first')).to.throw(RangeError)
        });

        it('If to many parameters should throw a RangeError.',() => {
            expect(() => Console.writeLine('Test {0} {1}', 'first', 'second', 'third')).to.throw(RangeError)
        });

        it('If the placeholders have indexes not withing the parameters range, should throw a RangeError.',() => {
            expect(() => Console.writeLine("Test {12}", 'huh thats to far')).to.throw(RangeError)
        });

        it('correct Test', () => {
            expect(Console.writeLine('Test {0} {1}', 1, 'is to far')).equal('Test 1 is to far')
        });
    });
});