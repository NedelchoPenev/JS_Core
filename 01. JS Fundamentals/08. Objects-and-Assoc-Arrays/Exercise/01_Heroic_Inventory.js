function heroicInventory(input) {
    let heroes = [];
    for (let line of input){
        let heroTokens = line.split(" / ").filter(w => w != '');
        let [name, level, items] = [heroTokens[0], Number(heroTokens[1]),
            heroTokens[2] != undefined ? heroTokens[2].split(', ') : []];
        let heroAttributes = {
            name: name,
            level: level,
            items: items
        };
        heroes.push(heroAttributes);
    }

    console.log(JSON.stringify(heroes))
}
heroicInventory(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);