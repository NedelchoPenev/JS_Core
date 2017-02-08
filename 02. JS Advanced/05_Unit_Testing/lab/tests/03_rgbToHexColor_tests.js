let rgbToHexColor = require('../03_RGB_to_Hex').rgbToHexColor;
let expect = require('Chai').expect;


describe("rgbToHexColor(red, green, blue)", function() {
    describe("Nominal cases (valid input)", function () {
        it("should return #FF9EAA on (255, 158, 170)", function () {
            let hex = rgbToHexColor(255, 158, 170);
            expect(hex).to.be.equal('#FF9EAA');
        });

        it("should return #000000 on (0, 0, 0) ", () => {
            expect(rgbToHexColor(0, 0, 0)).equal('#000000');
        });

        it("should return #0C0D0E on (12, 13, 14)  ", () => {
            expect(rgbToHexColor(12, 13, 14)).equal('#0C0D0E');
        });

        it("should return #FFFFFF on (255, 255, 255)  ", () => {
            expect(rgbToHexColor(255, 255, 255) ).equal('#FFFFFF');
        });
    });
    describe("Special cases (invalid input)", function () {
        it("should return undefined on (-1, 0, 0)", function () {
            let hex = rgbToHexColor(-1, 0, 0);
            expect(hex).to.be.undefined;
        });

        it("should return undefined on (0, 256, 0) ", () => {
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        });

        it("should return undefined on (0, 0, 3.14)  ", () => {
            expect(rgbToHexColor(0, 0, 3.14)).to.be.undefined;
        });

        it("should return undefined on (5, [3], {8:9})", () => {
            expect(rgbToHexColor("5", [3], {8:9})).to.be.undefined;
        });

        it("should return undefined on ()", () => {
            expect(rgbToHexColor([])).to.be.undefined;
        });

        it('should return undefined on rgbToHexColor(0)', () => {
            expect(rgbToHexColor(0)).to.be.undefined;
        });

        it('should return undefined on rgbToHexColor("pesho")', () => {
            expect(rgbToHexColor("pesho")).to.be.undefined;
        });
    });
});
