let expect = require('chai').expect;
let SortedList = require('../02_Sorted_List/sorted-list').SortedList;

let sortedList;
beforeEach('test', function () {
    sortedList = new SortedList();
});

describe("SortedList functionality", function() {
    it('typeof', () => {
        expect(typeof SortedList).equal('function');
    });

    it('has methods', () => {
        expect(SortedList.prototype.hasOwnProperty('size')).equal(true);
        expect(SortedList.prototype.hasOwnProperty('add')).equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).equal(true);
    });

    it('has add function which adds a new element', () => {
        sortedList.add(5)
        expect(sortedList.get(0)).equal(5);
        expect(sortedList.size).equal(1);
    });

    it('has add function which adds a new element', () => {
        sortedList.add(5)
        sortedList.add(1)
        sortedList.add(2)
        sortedList.add(3)
        expect(sortedList.get(0)).equal(1);
        expect(sortedList.size).equal(4);
    });

    it('has add function which adds a new element', () => {
        sortedList.add(5)
        sortedList.add(1)
        sortedList.add(2)
        sortedList.add(3)
        sortedList.remove(1)
        expect(sortedList.get(1)).equal(3);
        expect(sortedList.size).equal(3)
    });

    it('has add function which adds a new element', () => {
        sortedList.add(5)
        sortedList.add(1)
        sortedList.add(2)
        sortedList.add(3)
        sortedList.remove(0)
        sortedList.remove(0)
        sortedList.remove(0)
        sortedList.remove(0)
        expect(sortedList.size).equal(0);
    });

    it('error test', () => {
        sortedList.add(5)
        sortedList.add(2)
        sortedList.add(3)
        expect(() => {sortedList.get(3)}).to.throw(Error);
    });

    it('error test', () => {
        expect(() => {sortedList.get(0)}).to.throw(Error);
    });

    it('error test', () => {
        sortedList.add(5)
        sortedList.add(2)
        sortedList.add(3)
        expect(() => {sortedList.get(-1)}).to.throw(Error);
    });

    it('error test', () => {
        expect(() => sortedList.remove(0)).to.throw(Error);
    });
});