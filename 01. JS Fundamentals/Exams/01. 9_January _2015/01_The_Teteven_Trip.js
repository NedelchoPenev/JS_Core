function tetevenTrip(input) {

    for (let line of input) {
        let [car, fuel, route, luggage] = line.split(' ');

        let extraFuelForLuggage = Number(luggage) * 0.01;
        let baseFuelConsumation = (fuelCoefficient(fuel) * 10) + extraFuelForLuggage;
        let totalConsummation = Math.round(routes(route, baseFuelConsumation));

        console.log(`${car} ${fuel} ${route} ${totalConsummation}`);
    }

    function fuelCoefficient(fuel) {
        if (fuel == 'gas'){
            return 1.2;
        } else if (fuel == 'diesel'){
            return 0.8;
        }
        return 1;
    }

    function routes(route, baseF) {
        let snowConsumption = 0.3 * baseF;
        if (route == '1'){
            return (110 * (baseF / 100)) + (10 * (snowConsumption / 100));
        } else {
            return (95 * (baseF / 100)) + (30 * (snowConsumption / 100));
        }
    }
}
tetevenTrip(['BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54']
);