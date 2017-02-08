function cappyJuice(input) {
    let bottles = new Map();
    let juices = new Map();
    for (let line of input){
        let [juice, liters] = line.split(' => ');
        liters = Number(liters);
        juices.has(juice) ? juices.set(juice, juices.get(juice) + liters) : juices.set(juice, liters);
        if (juices.get(juice) >= 1000){
            let value = Math.floor(juices.get(juice) / 1000);
            bottles.has(juice) ? bottles.set(juice, bottles.get(juice) + value) : bottles.set(juice, value);
            let newValue = juices.get(juice) % 1000;
            juices.set(juice, newValue);
        }
    }

    for (let [juice, bottle] of bottles){
        console.log(juice + ' => ' + bottle);
    }
}
cappyJuice(["Kiwi => 234","Pear => 2345","Watermelon => 3456","Kiwi => 4567","Pear => 5678","Watermelon => 6789"]);