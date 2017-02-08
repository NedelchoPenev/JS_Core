function makeCandy(recipes) {

    class Candy{
        constructor(topping, filling, spice){
            this.setTopping = topping;
            this.setFilling = filling;
            this.setSpice = spice;
        }


        set setTopping(value) {
            const TOPPINGS = ['milk chocolate', 'white chocolate', 'dark chocolate'];
            if (!TOPPINGS.includes(value)){
                throw new TypeError;
            }
            this.topping = value;
        }

        set setFilling(value) {
            const FILLING = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge'];
            let tokens = value.split(',');
            if (tokens.length > 3){
                throw new TypeError;
            }
            if (value == ''){
                value = null;
            } else {
                for (let fill of tokens) {
                    if (!FILLING.includes(fill)){
                        throw new TypeError;
                    }
                }
            }
            this.filling = value;
        }

        set setSpice(value) {
            const SPICE = ['poison', 'asbestos'];
            if (SPICE.includes(value)){
                throw new TypeError;
            }

            if (value == ''){
                value = null;
            }
            this.spice = value;
        }
    }

    let candies = [];
    for (let recipe of recipes) {
        if (!/^[^:]+:[^:]*:[^:]*$/g.test(recipe)) {
            continue;
        }
        let [topping, filling, spice] = recipe.split(':');
        try {
            candies.push(new Candy(topping, filling, spice))
        } catch (ex) {

        }
    }

    return candies;
}

let res = makeCandy([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals',
    '::'
]);

console.log(JSON.stringify(res, null, 1));