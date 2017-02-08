function bill(input) {
    let sum = 0, products = [];

    for (let i = 0; i < input.length; i++){
        if (i % 2 == 0){
            products.push(input[i]);
        } else {
            sum += Number(input[i]);
        }
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
}
bill(['Cola', '1.35', 'Pancakes', '2.88']);