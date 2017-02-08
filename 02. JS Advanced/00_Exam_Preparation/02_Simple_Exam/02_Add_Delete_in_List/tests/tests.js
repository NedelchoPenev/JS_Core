let expect = require('chai').expect;
let func = require('../Add_Delete_in_List').func;

let list = {};
beforeEach('test', function () {
   list = func();
});

describe('Test List functionality', function () {
    it('should return empty for list', () => {
        expect(list.toString()).equal('');
    });

    it('should', () => {
        list.add(1);
        expect(list.delete(0)).equal(1);
        expect(list.toString()).equal('');
    });

    it('should', () => {
        list.add(1);
        expect(list.toString()).equal('1');
    });

    it('should', () => {
        list.add(1);
        list.delete(0)
        expect(list.toString()).equal('');
    });

    it('should', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.toString()).equal('1, two, 3')
    })

    it('should', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        list.delete(1);
        expect(list.toString()).equal('1, 3');
    });

    it('should', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        list.delete(3.14);
        expect(list.toString()).equal('1, two, 3');
    });

    it('should', () => {
        expect(list.delete(0)).equal(undefined);
    });

    it('should', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.delete(3)).equal(undefined);
        expect(list.toString()).equal('1, two, 3');
    });

    it('should', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.delete('del we')).equal(undefined);
    });

    it('should', () => {
        list.add('ughhh')
        expect(list.delete(-6)).equal(undefined);
        expect(list.toString()).equal('ughhh');
    });

    it('should', () => {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.delete(1)).equal('two');
        expect(list.toString()).equal('1, 3');
        list.add('pesho');
        expect(list.toString()).equal('1, 3, pesho');
        expect(list.delete(1)).equal(3);
        expect(list.toString()).equal('1, pesho');
        expect(list.delete(0)).equal(1);
    })
});