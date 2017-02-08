function aggregateTable(input) {
    let list = [], sum = 0;
    for (let line of input){
        let town = line.split('|')
        let townName = town[1].trim();
        let income = Number(town[2].trim());
        list.push(townName);
        sum += income;
    }
    console.log(list.join(", ") + '\n' + sum);
}
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);