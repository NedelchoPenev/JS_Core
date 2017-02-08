function uniqueSequences(input) {
    let arreies = new Map();
    for (let line of input) {
        let arr = JSON.parse(line).sort((a, b) => b - a);
        let outArr = `[${arr.join(', ')}]`;
        arreies.set(outArr, arr.length);
    }
    
    let sortedArreies = [...arreies.keys()].sort(function (a, b) {
        return arreies.get(a) - arreies.get(b);
    })

    for (let array of sortedArreies) {
        console.log(array);
    }
}
uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
uniqueSequences(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);