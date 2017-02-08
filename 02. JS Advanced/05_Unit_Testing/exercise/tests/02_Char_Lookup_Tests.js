let expect = require('chai').expect;
let lookupChar = require('../02_Char_Lookup').lookupChar;

describe("lookupChar(str, index) - Tests", function() {
    it("should return undefined for {1, 2}", () => {
        expect(lookupChar(1, 3)).equal(undefined);
    });

    it("should return undefined for {pesho, gosho}", () => {
        expect(lookupChar('pesho', 'gosho')).equal(undefined);
    });

    it("should return undefined for {pesho, 1.1}", () => {
        expect(lookupChar('pesho', 1.1)).equal(undefined);
    });

    it("should return Incorrect index for {pesho, 13}", () => {
        expect(lookupChar('pesho', 13)).equal("Incorrect index");
    });

    it("should return Incorrect index for {pesho, 5}", () => {
        expect(lookupChar('pesho', 5)).equal("Incorrect index");
    });

    it("should return Incorrect index for {pesho, -1}", () => {
        expect(lookupChar('pesho', -1)).equal("Incorrect index");
    });

    it("should return u for {ughhhhh}", () => {
        expect(lookupChar('ughhhhh', 0)).equal("u");
    });

    it("should return n for {Ivan}", () => {
        expect(lookupChar('Ivan', 3)).equal("n");
    });
});