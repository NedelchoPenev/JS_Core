function fleaRacing(input) {
    let jumpsAllowed = input.shift();
    let lengthTrack = Number(input.shift());
    let racers = new Map();
    let winner = '';
    for (let line of input) {
        let [name, distance] = line.split(', ');
        racers.set(name, Number(distance));
    }

    let jumps = new Map();
    let bestJump = 0, bestJumper;
    for (let i = 0; i < jumpsAllowed; i++){
        for (let [name, jump] of racers) {
            if (!jumps.has(name)){
                jumps.set(name, jump);
            } else {
                jumps.set(name, jumps.get(name) + jump);
            }
            if (jumps.get(name) >= lengthTrack - 1){
                jumps.set(name, lengthTrack - 1);
                winner = name;
                break;
            }
            if (jumps.get(name) >= bestJump){
                bestJump = jumps.get(name);
                bestJumper = name;
            }
        }

        if (winner != ''){
            break;
        }
    }

    if (winner == ''){
        winner = bestJumper;
    }

    console.log('#'.repeat(lengthTrack));
    console.log('#'.repeat(lengthTrack));
    for (let [name, jump] of jumps) {
        let letter = name.substr(0, 1).toUpperCase();
        let sPart = 0;
        if ((lengthTrack - 1 - jump) > 0){
            sPart = lengthTrack - 1 - jump;
        }
        let print = '.'.repeat(jump) + letter + '.'.repeat(sPart);
        console.log(print);
    }
    console.log('#'.repeat(lengthTrack));
    console.log('#'.repeat(lengthTrack));
    console.log(`Winner: ${winner}`);
}
//fleaRacing(["10", "19", "angel, 9", "Boris, 10", "Georgi, 3", "Dimitar, 7"]);
//fleaRacing(["3","5","cura, 1","Pepi, 1","UlTraFlea, 1","BOIKO, 1"]);
fleaRacing(["1","1","pesho, 1","gosho, 1"]);