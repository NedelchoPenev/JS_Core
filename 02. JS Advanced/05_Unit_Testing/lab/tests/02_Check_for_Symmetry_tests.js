let isSymmetric = require('../02_Check_for_Symmetry').isSymmetric;
let expect = require('chai').expect;

describe("isSymmetric(arr) ", function() {
    it("should return true for [1,2,3,3,2,1]", function () {
        let symmetric = isSymmetric([1, 2, 3, 3, 2, 1]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return false for [1,2,3,4,2,1]", function() {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.equal(false)
    });
    it("should return true for [-1,2,-1]", function() {
        expect(isSymmetric([-1,2,-1])).to.be.equal(true);
    });
    it("should return false for [-1,2,1]", function() {
        expect(isSymmetric([-1,2,1])).to.be.equal(false);
    });
    it('should return true for [5,hi,{a:5},new Date(),{a:5},hi,5]', function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    it('should return true on isSymmetric([])',() => {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it('should return false for [5,hi,{a:5},new Date(),{X:5},hi,5]', () => {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).equal(false);
    });
    it('should return true on isSymmetric([2])', () => {
        expect(isSymmetric([2])).equal(true);
    });
    it('should return false on isSymmetric([1,2,-1])', () => {
        expect(isSymmetric([1, 2, -1])).equal(false);
    });
    it('should return false on isSymmetric("hello")', () => {
        expect(isSymmetric("hello")).equal(false);
    });
});