let expect = require('chai').expect;
let mathEnforcer = require('../03_Math_Enforcer').mathEnforcer;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return 10 for {5}', () => {
            expect(mathEnforcer.addFive(5)).equal(10);
        });

        it('should return 34.5 for {29.5}', () => {
            expect(mathEnforcer.addFive(29.5)).closeTo(34.5, 0.01)
        });

        it('should return -34 for {-39}', () => {
            expect(mathEnforcer.addFive(-39)).equal(-34);
        });

        it('should return undefined for {five}', () => {
            expect(mathEnforcer.addFive('5')).equal(undefined);
        });
    });

    describe('subtractTen', function () {
        it('should return 10 for {20}', () => {
            expect(mathEnforcer.subtractTen(20)).equal(10);
        });

        it('should return 34.5 for {44.5}', () => {
            expect(mathEnforcer.subtractTen(44.5)).closeTo(34.5, 0.01);
        });

        it('should return -16 for {-6}', () => {
            expect(mathEnforcer.subtractTen(-6)).equal(-16);
        });

        it('should return undefined for {five}', () => {
            expect(mathEnforcer.subtractTen('110')).equal(undefined);
        });
    });

    describe('sum', function () {
        it('should return 10 for {6, 4}', () => {
            expect(mathEnforcer.sum(6, 4)).equal(10);
        });

        it('should return 100 for {45, 55}', () => {
            expect(mathEnforcer.sum(45, 55)).equal(100);
        });

        it('should return 23.5 for {22.9, 0.6}', () => {
            expect(mathEnforcer.sum(22.9, 0.6)).closeTo(23.5, 0.01);
        });

        it('should return -16 for {-6, -10}', () => {
            expect(mathEnforcer.sum(-6, -10)).equal(-16);
        });

        it('should return undefined for {five, 3}', () => {
            expect(mathEnforcer.sum('five', 3)).equal(undefined);
        });

        it('should return undefined for {10, five}', () => {
            expect(mathEnforcer.sum(10, [])).equal(undefined);
        });
    });
});