function fillterMatrix(input) {
    let sequenceLength = input.pop();
    let arrLengths = [];
    let newArr = [];

    for (let line of input) {
        let arr = line.trim().split(' ');
        arrLengths.push(arr.length);
        for (let i = 0; i < arr.length; i++){
            newArr.push(arr[i]);
        }
    }

    

    console.log(newArr.join(' '));
}
fillterMatrix(["3 3 3 2 5 9 9 9 9 1 2","1 1 1 1 1 2 5 8 1 1 7","7 7 1 2 3 5 7 4 4 1 2","2"]);
// fillterMatrix(["1 2 3 3","3 5 7 8","3 2 2 1","3"]);
// fillterMatrix(["1 2 3 3 2 1 ","5 2 2 1 1 0","3 3 1 3 3","2"]);
// fillterMatrix(["2 1 1 1","1 1 1 ","3 7 3 3 1","2"]);