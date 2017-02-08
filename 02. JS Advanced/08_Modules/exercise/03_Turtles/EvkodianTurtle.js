import {Turtle} from "./Turtle";

export class EvkodianTurtle extends Turtle{

    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);

        this.evkodiumValue = evkodiumValue;
    }

    get evkodium(){
        return {
            value: this.evkodiumValue,
            density: this.gender == 'male' ? this.age * 3 : this.age * 2
        };
    }

    toString(){
        return super.toString() + `\nEvkodium: ${this.evkodiumValue * this.evkodium.density}`
    }
}
