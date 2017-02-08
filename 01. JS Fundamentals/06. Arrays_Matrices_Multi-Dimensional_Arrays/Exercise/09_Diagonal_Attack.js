function diagonalAttack(matrixRow) {
    let matrix = matrixRow.map(row => row.split(' ').map(Number));

    let mainSum = 0, secondarySum = 0;

    for (let row = 0; row < matrix.length; row++){
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - 1 - row];
    }

    if (mainSum == secondarySum){
        for (let row = 0; row < matrix.length; row++){
            for (let col = 0; col < matrix[row].length; col++){
                if (row != col && col != matrix[row].length - 1 - row){
                    matrix[row][col] = mainSum;
                }
            }
        }
    }

    return matrix.map(m => m.join(' ')).join('\n');
}
console.log(diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
));

console.log(diagonalAttack(
    ['1 1 1',
        '1 1 1',
        '1 1 0']

));