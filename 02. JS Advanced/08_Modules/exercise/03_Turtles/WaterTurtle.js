import {Turtle} from './Turtle';

export class WaterTurtle extends Turtle{

    constructor(name, age, gender, waterPool) {
        super(name, age, gender);
        this._waterPool = waterPool;

    }

    get currentWaterPool() {
        return this._waterPool;
    }

    travel(waterPool){
        this._waterPool = waterPool;
        this._age += 5;
    }

    toString(){
        return super.toString() + '\n' + `Currently inhabiting ${this._waterPool}`;
    }
}