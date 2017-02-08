function catalog(input) {
    let alphabetCat = new Map();
    for (let line of input){
        let [product, price] = line.split(' : ');
        let letter = product[0];
        if (!alphabetCat.has(letter)) {
            alphabetCat.set(letter, []);
        }
        alphabetCat.get(letter).push({title: product,value: Number(price)});
    }
    
    function customComparator(a, b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }

    let sortCatalog = Array.from(alphabetCat.keys()).sort();
    for (let letter of sortCatalog){
        console.log(letter);
        let sortedProducts = alphabetCat.get(letter).sort(customComparator);
            sortedProducts.forEach(p => console.log(`  ${p.title}: ${p.value}`));

    }
}
catalog(["Appricot : 20.4","Fridge : 1500",
    "TV : 1499","Deodorant : 10","Boiler : 300","Apple : 1.25","Anti-Bug Spray : 15","T-Shirt : 10"]);