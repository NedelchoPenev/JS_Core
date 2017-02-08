function rossettaStone(input) {
    let num = Number(input.shift());
    let templateMatrix = input.splice(0, num).map(row => row.split(' ').map(n => Number(n)));
    let matrix = input.map(row => row.split(' ').map(Number));
    let rosettaStoneDecoding = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'
        , 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    for (let i = 0; i < templateMatrix.length; i++){
        for (let g = 0; g < templateMatrix[i].length; g++){
            let number = templateMatrix[i][g];
            for (let row = 0 + i; row < matrix.length; row += num){
                for (let col = 0 + g; col < matrix[row].length; col+=templateMatrix[i].length){
                    if ((row) < matrix.length && (col) < matrix[row].length) {
                        matrix[row][col] = (matrix[row][col] + number) % 27;
                        matrix[row][col] = rosettaStoneDecoding[matrix[row][col]];
                    }
                }
            }
        }
    }

    let output = '';
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            output += matrix[row][col];
        }
    }

    console.log(output);
}
// rossettaStone([ '2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22' ]
// );
// rossettaStone([ '2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22' ]
// );

rossettaStone(["1","1 3 13","12 22 14 13 25 0 4 24 23","18 24 2 25 22 0 0 11 18","8 25 6 26 8 23 13 4 14","14 3 14 10 6 1 6 16 14","11 12 2 10 24 2 13 24 0","24 24 10 14 15 25 18 24 12","4 24 0 8 4 22 19 22 14","0 11 18 26 1 19 18 13 15","8 15 14 26 24 14 26 24 14"]);