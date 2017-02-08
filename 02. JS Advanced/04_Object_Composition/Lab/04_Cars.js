function createCar(commands){
    let cars = new Map();
    let carManager = {
        create: function ([name, ,parent]) {
            parent = parent ? cars.get(parent) : null;
            let newObj = Object.create(parent);
            cars.set(name, newObj);
            return newObj;
        },
        set: function ([name, key, value]) {
            let obj = cars.get(name);
            obj[key] = value;
            },
        print: function ([name]) {
            let car = cars.get(name);
            let props = [];
            for (let prop in car)
                props.push(`${prop}:${car[prop]}`);
            console.log(props.join(', '));
        }
    };

    for (let command of commands) {
        let commPar = command.split(' ');
        let action = commPar.shift();
        carManager[action](commPar);
    }
}
createCar(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']);
