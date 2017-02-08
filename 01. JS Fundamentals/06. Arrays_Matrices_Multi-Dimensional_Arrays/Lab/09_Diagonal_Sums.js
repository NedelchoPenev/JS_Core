function diagonalSums(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let mainSum = 0, secondarySum = 0;

    for (let i = 0; i < matrix.length; i++){
        mainSum += matrix[i][i];
        secondarySum += matrix[i][matrix.length - i - 1];
    }

    console.log(mainSum + " " + secondarySum);
}
diagonalSums(['20 40', '10 60']);