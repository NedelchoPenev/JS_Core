function luggage(input) {
    let ownerNames = new Map();
    let sortType = input.pop().trim();
    for (let line of input) {
        let [name, luggage, isFood, isDrink, isFragile, weight, transferred] = line.split(/\.*\*\.*/g).map(e => e.trim());
        if (!ownerNames.has(name)){
            ownerNames.set(name, []);
        }
        ownerNames.get(name)
            .push({luggage: luggage, kg: Number(weight), fragile: isFragile === 'true',
                type: typeOfLuggage(isFood, isDrink), transferredWith: transferred});
    }

    let output = {};
    [...ownerNames.keys()].forEach(function (name) {
        output[name] = {};
        let items = ownerNames.get(name);
        if (sortType == 'luggage name'){
            items = ownerNames.get(name).sort((a, b) => a.luggage.localeCompare(b.luggage));
        }

        if (sortType == 'weight'){
            items = ownerNames.get(name).sort((a, b) => a.kg - b.kg);
        }

        for (let item of items) {
            let itemName = item.luggage;
            delete item.luggage;
            output[name][itemName] = item;
        }
    })

    console.log(JSON.stringify(output));
    
    function typeOfLuggage(isFood, isDrink) {
        if (isFood == 'true'){
            return 'food';
        } else if (isDrink == 'true'){
            return 'drink';
        }
        return 'other';
    }
}
luggage(["Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack",
    "Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack",
    "Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack",
    "Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV",
    "Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV",
    "Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV",
    "strict"]);