class Stringer {
    constructor(str, length) {
        this.str = str;
        this.length = length;
    }


    get innerString () {
        return this.str.toString();
    }

    get innerLength() {
        return this.length;
    }

    increase(length) {
        this.length += length;
    }

    decrease(length) {
        this.length -= length
        if (this.length < 3){
            this.length = 0;
        }
    }

    toString() {
        if (this.length == 0){
            return '...'
        }
        
        if (this.length >= this.str.length){
            return this.str;
        }

        return this.str.substr(0, this.length) + '...'
    }
}