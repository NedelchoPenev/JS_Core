function autoCompany(input) {
    let brands = new Map();
    for (let line of input){
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);
        if (!brands.has(brand)){
            brands.set(brand, new Map());
        }
        if (!brands.get(brand).has(model)){
            brands.get(brand).set(model, quantity);
        } else {
            let oldValue = brands.get(brand).get(model);
            brands.get(brand).set(model, oldValue + quantity);
        }
    }

    for (let [brand, models] of brands){
        console.log(brand);
        for (let [model, quantity] of models){
            console.log(`###${model} -> ${quantity}`);
        }
    }
}