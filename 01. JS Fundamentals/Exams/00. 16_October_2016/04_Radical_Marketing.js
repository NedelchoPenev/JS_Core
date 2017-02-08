function radicalMarketing(input) {
    let subscribers = new Map();
    let toSubs = new Map();

    for (let line of input) {
        let names = line.split('-');
        if (names.length == 1) {
            let person = names[0];
            subscribers.set(person, []);
            toSubs.set(person, [])
        } else {
            let subscribes = names[0];
            let subToPerson = names[1];
            if (subscribers.has(subscribes) && subscribers.has(subToPerson) && subscribes != subToPerson) {
                subscribers.get(subToPerson).push(subscribes);
                toSubs.get(subscribes).push(subToPerson);
            }
        }
    }

    let sub = [...subscribers.keys()].sort((a, b) => subscribers.get(b).length - subscribers.get(a).length);

    let winner = sub[0];

    if (subscribers.get(sub[0]).length == subscribers.get(sub[1]).length){
        if (toSubs.get(sub[0]).length > toSubs.get(sub[1]).length){
            winner = sub[0];
        } else if (toSubs.get(sub[0]).length < toSubs.get(sub[1]).length){
            winner = sub[1];
        }
    }

    console.log(winner);
    let counter = 1;
    for (let subs of subscribers.get(winner)) {
        console.log(`${counter}. ${subs}`);
        counter++;
    }
}
radicalMarketing(["A", "C", "D", "B", "A-B", "B-A", "C-A", "D-A", "C-B", "D-B", "B-C"]);
radicalMarketing(["J", "G", "P", "R", "C", "J-G", "G-J", "P-R", "R-P", "C-J"]);