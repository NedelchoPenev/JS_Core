function goshkoTheRabbit(input) {
    let directions = input.shift().split(', ');
    let matrix = input.map(r => r.split(', '));

    let row = 0;
    let col = 0;

    let visitedCells = [];
    let stats = {'&': 0, '*': 0, '#': 0, '!': 0, 'wall hits': 0};

    for (let direction of directions) {
        switch (direction){
            case 'up':
                if (isInside(row - 1, col)){
                    row--;
                    makeMove(row, col);
                } else {
                    stats['wall hits']++;
                }
                break;
            case 'right':
                if (isInside(row, col + 1)){
                    col++;
                    makeMove(row, col)
                } else {
                    stats['wall hits']++;
                }
                break;
            case 'left':
                if (isInside(row, col - 1)){
                    col--
                    makeMove(row, col);
                } else {
                    stats['wall hits']++;
                }
                break;
            default:
                if (isInside(row + 1, col)){
                    row++;
                    makeMove(row, col);
                } else {
                    stats['wall hits']++;
                }
                break;
        }
    }

    console.log(JSON.stringify(stats));
    console.log(visitedCells.length > 0 ? visitedCells.join('|') : 'no');

    function makeMove(row, col) {
        if (matrix[row][col] != undefined){
            let pattern = /(?:{)(#|\*|!|&)(?:})/g;
            let match;
            while (match = pattern.exec(matrix[row][col])){
                stats[match[1]]++;
            }

            let deathCell = matrix[row][col].replace(pattern, '@');
            visitedCells.push(deathCell);
            matrix[row][col] = undefined;
        }
    }

    function isInside(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
    }
}
//goshkoTheRabbit(["right, up, up, down", "asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj", "tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip", "poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne"]);
goshkoTheRabbit(["right, right, down, left, left, down, right, right, down, left","qwekjs, asd{#}a, mxz{#}{*}","qwekjs, asd{#}a, xnc{&}a","qwekjs, asd{#}a, xnc{&}a","qwekjs, asd{#}a, xnc{&}a"]);