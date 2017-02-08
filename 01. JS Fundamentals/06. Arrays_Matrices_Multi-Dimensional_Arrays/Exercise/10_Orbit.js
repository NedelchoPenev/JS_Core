function orbit([size, targetCell]) {
    size = size.split(' ');
    let rows = size[0];
    let cols = size[1];
    targetCell = targetCell.split(' ');
    let targetRow = targetCell[0];
    let targetCol = targetCell[1];

    let matrix = [];
    for (let row = 0; row < rows; row++){
        let line = [];
        for (let col = 0; col < cols; col++){
            line.push(Math.max(Math.abs(row - targetRow), Math.abs(col - targetCol)) + 1);
        }
        matrix.push(line);
    }

    let printMatrix = m => console.log(m.map(r => r.join(' ')).join('\n'));
    printMatrix(matrix);
}
orbit(['4 4',
    '0 0']);