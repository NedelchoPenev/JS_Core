function carFactory(car) {
    let carFactory = {
        model: '',
        engine: {
            smallEngine: {power: 90, volume: 1800},
            normalEngine: {power: 120, volume: 2400},
            monsterEngine: {power: 200, volume: 3500}
        },
        carriage: {
            hatchback: {type: 'hatchback', color: ''},
            coupe: {type: 'coupe', color: ''},
        },
        wheels: function (diameter) {
            diameter = Math.floor(diameter);
            if (diameter % 2 == 0){
                diameter = diameter - 1;
            }

            return [diameter, diameter, diameter, diameter];
        }
    };

    let newCar = Object.create(carFactory);
    newCar.model = car['model'];
    if (car.power <= 90){
        newCar.engine = carFactory.engine.smallEngine;
    } else if (car.power > 90 && car.power <= 120) {
        newCar.engine = carFactory.engine.normalEngine;
    } else {
        newCar.engine = carFactory.engine.monsterEngine;
    }

    let crrType = car.carriage;
    newCar.carriage = carFactory.carriage[crrType];
    newCar.carriage.color = car.color;
    newCar.wheels = newCar.wheels(car.wheelsize);
    return newCar;
}
console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));
//
// carFactory({ model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17 }
// );