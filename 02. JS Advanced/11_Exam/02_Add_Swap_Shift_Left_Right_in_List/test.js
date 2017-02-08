let expect = require('chai').expect;
let createList = require('./02_Add_Swap_Shift_Left_Right_in_List').createList;

let date;
beforeEach('text', function () {
    date = createList();
});

describe("tests …", function() {
    it('typeof', () => {
        expect(typeof date).equal('object');
    });

    it('has methods', () => {
        expect(date.hasOwnProperty('shiftLeft')).equal(true);
        expect(date.hasOwnProperty('add')).equal(true);
        expect(date.hasOwnProperty('shiftRight')).equal(true);
        expect(date.hasOwnProperty('swap')).equal(true);
        expect(date.hasOwnProperty('toString')).equal(true);
    });

    it("Add …", () => {
        expect(date.toString()).equal('');
    });

    it("Add …", () => {
        date.add(5)
        expect(date.toString()).equal('5');
    });

    it("Add …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        expect(date.toString()).equal('5, Pesho, 1239');
    })

    it("shiftLeft …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.shiftLeft();
        expect(date.toString()).equal('Pesho, 1239, 5');
    })

    it("shiftLeft …", () => {
        date.add(5);
        date.shiftLeft();
        expect(date.toString()).equal('5');
    });

    it("shiftLeft …", () => {
        date.shiftLeft();
        expect(date.toString()).equal('');
    });

    it("shiftLeft …", () => {
        date.shiftLeft();
        date.shiftLeft();
        expect(date.toString()).equal('');
    });

    it("shiftLeft …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.shiftLeft();
        date.add(["four"]);
        expect(date.toString()).equal('Pesho, 1239, 5, four');
    })

    it("shiftRight …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.shiftRight();
        date.shiftLeft();
        expect(date.toString()).equal('5, Pesho, 1239' );
    });

    it("shiftRight …", () => {
        date.add('Pesho');
        date.shiftRight();
        expect(date.toString()).equal('Pesho');
    });
    it("shiftRight …", () => {
        date.shiftRight();
        date.shiftRight();
        expect(date.toString()).equal('');
    });

    it("shiftRight …", () => {
        date.shiftRight();
        expect(date.toString()).equal('');
    });

    it("shiftRight …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.shiftRight();
        date.add(["four"]);
        expect(date.toString()).equal('1239, 5, Pesho, four');
    });

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap('Pesho', 2)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(1, '2')).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap('Pesho', '2')).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(-1, 2)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(1, -200)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(-1, -2)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(4, 2)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(2, 100)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(200, 100)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(2, 2)).to.be.false;
        expect(date.toString()).equal('5, Pesho, 1239, four');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(0, 3)).to.be.true;
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(0, 3)).to.be.true;
        expect(date.toString()).equal('four, Pesho, 1239, 5');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        expect(date.swap(3, 0)).to.be.true;
        expect(date.toString()).equal('four, Pesho, 1239, 5');
    })

    it("should …", () => {
        date.add(5);
        date.add('Pesho');
        date.add('1239');
        date.add(["four"]);
        date.swap(0, 3);
        expect(date.toString()).equal('four, Pesho, 1239, 5');
    })

    it("should …", () => {
        date.swap(0, 3);
        expect(date.swap(0, 3)).to.be.false;
        expect(date.toString()).equal('');
    })

    it('Should NOT swap on non-integer (float) index', () => {
        date.add(1);
        date.add(2);
        date.add(3);
        let result = date.swap(0, 2.1);
        expect(date.toString()).to.equal('1, 2, 3');
        expect(result).to.equal(false);
    });
});
