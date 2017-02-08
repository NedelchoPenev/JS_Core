import {Turtle} from './Turtle';

export class GalapagosTurtle extends Turtle{

    constructor(name, age, gender) {
        super(name, age, gender);

        this._eaten = [];
    }


    get thingsEaten() {
        return this._eaten;
    }

    eat(food){
        this._eaten.push(food);
    }

    grow(age){
        super.grow(age)
        this._eaten = [];
    }

    toString(){
        return super.toString() + `\nThings, eaten this year: ${this._eaten.join(', ')}`;
    }
}