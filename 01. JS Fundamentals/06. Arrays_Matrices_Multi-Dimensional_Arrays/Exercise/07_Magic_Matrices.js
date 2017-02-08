function magicMatrices(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));

    for (let row = 0; row < matrix.length - 1; row++){
        let upRow = 0;
        let downRow = 0;

        for (let col = 0; col < matrix[row].length; col++){
            upRow += matrix[row][col];
            downRow += matrix[row + 1][col];
        }

        if (upRow != downRow){
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length -1; col++){
        let leftCol = 0;
        let rightCol = 0;
        for (let row = 0; row < matrix.length; row++){
            leftCol += matrix[row][col];
            rightCol += matrix[row][col + 1];
        }

        if (leftCol != rightCol){
            return false;
        }
    }

    return true;
}
console.log(magicMatrices(
    ['4 5 6 5',
        '6 5 4 5',
        '5 5 5 5'
        ]
));