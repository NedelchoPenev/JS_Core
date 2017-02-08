class Rat {
    constructor (name){
        this.name = name;
        this.rats = []
    }

    getRats(){
        return this.rats;
    }

    unite(otherRat){
        if (otherRat instanceof Rat){
            this.rats.push(otherRat)
        }
    }

    toString() {
        let output = '';
        output += this.name + '\n';
        for (let rat of this.rats) {
            output += `##${rat}\n`;
        }

        return output.trim();
    }
}