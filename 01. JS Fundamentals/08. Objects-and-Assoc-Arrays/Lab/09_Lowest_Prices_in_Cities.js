function lowestPrice(input) {
    let products = new Map();
    for (let productTown of input) {
        let [town, product, price] = productTown.split(/\s+\|\s+/);
        price = Number(price);
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, price);
    }

    for (let [product, towns] of products) {
        let price = Number.MAX_VALUE;
        let town = '';
        for (let [curTown, curPrice] of towns) {
            if (price > curPrice){
                price = curPrice;
                town = curTown;
            }
        }
        console.log(`${product} -> ${price} (${town})`);
    }
}
lowestPrice(["Sample Town | Sample Product | 1000", "Sample Town | Orange | 2", "Sample Town | Peach | 1",
    "Sofia | Orange | 3", "Sofia | Peach | 2", "New York | Sample Product | 1000.1", "New York | Burger | 10"]);