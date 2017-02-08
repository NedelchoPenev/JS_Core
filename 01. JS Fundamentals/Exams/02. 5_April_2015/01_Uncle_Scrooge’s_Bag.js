function uncleScrooge(input) {
    let coins = 0;
    for (let line of input) {
        let [type, value] = line.split(' ');
        value = Number(value);
        if (type.toLowerCase() != 'coin' || !Number.isInteger(value) || value < 0){
            continue;
        }
        coins += value;
    }

    let goldCoins = Math.floor(coins / 100);
    coins = coins % 100;
    let silverCoins = Math.floor(coins / 10);
    coins = coins % 10;
    let bronzeCoins = coins;
    
    console.log(`gold : ${goldCoins}`);
    console.log(`silver : ${silverCoins}`);
    console.log(`bronze : ${bronzeCoins}`);
}
uncleScrooge(['coin -1','coin 2', 'coin 5', 'coin 10',
    'coin 20', 'coin 50', 'coin 100', 'coin 200',
    'coin 500','cigars 1']);